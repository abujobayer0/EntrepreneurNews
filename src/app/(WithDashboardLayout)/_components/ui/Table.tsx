"use client";

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ReactNode } from "react";

import { Button } from "../../../../components/ui/button/Button";
import { PlusIcon, CheckIcon } from "../../../../components/ui/icons/Icons";
import Pagination from "../../../../components/ui/pagination/Pagination";
import { theme } from "@/constants/theme";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

export interface Column {
  key: string;
  title: string;
  render?: (value: any, record: any, index: number) => ReactNode;
  width?: string | number;
}

interface AddButtonProps {
  title: string;
  route?: string;
  icon?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "secondary";
  iconPosition?: "left" | "right";
}

interface TableProps<T> {
  title: string;
  columns: Column[];
  data: T[];
  onAddClick?: () => void;
  addButtonProps?: AddButtonProps;
  actionItems?: {
    label: string;
    onClick: (record: T) => void;
    icon?: React.ReactNode;
  }[];
  className?: string;
  itemsPerPage?: number;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
}

const Table = <T extends Record<string, any>>({
  title,
  columns,
  data,
  onAddClick,
  addButtonProps,
  actionItems,
  className = "",
  itemsPerPage = 10,
  selectable = false,
  onSelectionChange,
}: TableProps<T>) => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const router = useRouter();

  // Filter data based on search text
  const filteredData = data.filter((item) => {
    if (!searchText) return true;

    return Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchText.toLowerCase())
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle row selection
  const handleRowSelect = (id: string) => {
    const newSelectedRows = { ...selectedRows, [id]: !selectedRows[id] };
    setSelectedRows(newSelectedRows);

    if (onSelectionChange) {
      const selectedIds = Object.entries(newSelectedRows)
        .filter(([isSelected]) => isSelected)
        .map(([id]) => id);
      onSelectionChange(selectedIds);
    }
  };

  // Handle select all
  const handleSelectAll = () => {
    const allSelected = paginatedData.every((row) => selectedRows[row.id]);

    let newSelectedRows = { ...selectedRows };
    if (allSelected) {
      // Deselect all
      paginatedData.forEach((row) => {
        newSelectedRows[row.id] = false;
      });
    } else {
      // Select all
      paginatedData.forEach((row) => {
        newSelectedRows[row.id] = true;
      });
    }

    setSelectedRows(newSelectedRows);

    if (onSelectionChange) {
      const selectedIds = Object.entries(newSelectedRows)
        .filter(([isSelected]) => isSelected)
        .map(([id]) => id);
      onSelectionChange(selectedIds);
    }
  };

  // Calculate if all items on current page are selected
  const allSelected =
    paginatedData.length > 0 &&
    paginatedData.every((row) => selectedRows[row.id]);

  // Add a function to handle navigation or custom click
  const handleAddButtonClick = () => {
    if (addButtonProps?.route) {
      router.push(addButtonProps.route as any);
    } else if (onAddClick) {
      onAddClick();
    }
  };

  return (
    <div
      className={`w-full min-w-full flex-1 overflow-hidden rounded ${className}`}
      // style={{ position: "relative", zIndex: 1 }}
    >
      {/* Table Header */}
      <div className="flex p-4 flex-row justify-between items-center flex-wrap gap-4 w-full bg-white">
        <p
          className="text-lg font-medium"
          style={{ color: theme.colors.black }}
        >
          {title}
        </p>

        <div className="flex flex-row items-center gap-2 flex-wrap">
          <SearchBar
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            className="w-full sm:w-64"
          />

          {(onAddClick || addButtonProps?.route) && (
            <Button
              title={addButtonProps?.title || "Add"}
              onClick={handleAddButtonClick}
              icon={addButtonProps?.icon || <PlusIcon />}
              size={addButtonProps?.size || "md"}
              iconPosition={addButtonProps?.iconPosition || "left"}
              className={cn("w-full sm:w-auto px-3", addButtonProps?.className)}
            />
          )}
        </div>
      </div>

      {/* Table Content */}

      <div className="overflow-x-auto">
        {/* Table Headers */}
        <div className="flex flex-row justify-between items-center w-full bg-white">
          {selectable && (
            <div
              className="px-4"
              style={{
                width: 50,
              }}
            >
              <button
                onClick={handleSelectAll}
                className="size-4 flex rounded border border-gray-300 items-center justify-center"
                style={{
                  backgroundColor: allSelected ? "#E1E3F8" : "transparent",
                }}
              >
                {allSelected && <CheckIcon />}
              </button>
            </div>
          )}

          {columns.map((column) => (
            <div
              key={column.key}
              className="px-3 bg-white"
              style={{
                width:
                  column.width ||
                  `${
                    100 /
                    (columns.length +
                      (actionItems && actionItems.length > 0 ? 1 : 0) +
                      (selectable ? 0.5 : 0))
                  }%`,
              }}
            >
              <p
                className="font-medium whitespace-nowrap"
                style={{ color: theme.colors.text }}
              >
                {column.title}
              </p>
            </div>
          ))}

          {actionItems && actionItems.length > 0 && (
            <div
              className="p-4 bg-white"
              style={{
                width: 80,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="font-medium" style={{ color: theme.colors.text }}>
                Actions
              </p>
            </div>
          )}
        </div>

        {/* Table Rows */}
        {paginatedData.length > 0 ? (
          paginatedData.map((record, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-row justify-between items-center w-full"
              style={{
                backgroundColor: rowIndex % 2 === 0 ? "transparent" : "white",
                maxWidth: "auto",
              }}
            >
              {selectable && (
                <div
                  className="p-4"
                  style={{
                    width: 50,
                  }}
                >
                  <button
                    onClick={() => handleRowSelect(record.id)}
                    className="size-4 rounded border border-gray-300 items-center justify-center"
                    style={{
                      backgroundColor: selectedRows[record.id]
                        ? "#E1E3F8"
                        : "transparent",
                    }}
                  >
                    {selectedRows[record.id] && <CheckIcon />}
                  </button>
                </div>
              )}

              {columns.map((column) => (
                <div
                  key={`${rowIndex}-${column.key}`}
                  className="px-3"
                  style={{
                    width:
                      column.width ||
                      `${
                        100 /
                        (columns.length +
                          (actionItems && actionItems.length > 0 ? 1 : 0) +
                          (selectable ? 0.5 : 0))
                      }%`,
                  }}
                >
                  {column.render ? (
                    column.render(record[column.key], record, rowIndex)
                  ) : (
                    <p style={{ color: theme.colors.text }}>
                      {record[column.key]}
                    </p>
                  )}
                </div>
              ))}

              {actionItems && actionItems.length > 0 && (
                <div
                  className="py-3"
                  style={{
                    width: 80,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DropdownMenu
                    items={actionItems.map((item) => ({
                      ...item,
                      onClick: () => item.onClick(record),
                    }))}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-8 flex items-center justify-center w-full">
            <p style={{ color: theme.colors.text }}>No data found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="border-t border-gray-100 w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
