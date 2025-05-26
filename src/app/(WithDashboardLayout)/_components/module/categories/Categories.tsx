"use client";

import React, { useState } from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, PlusIcon, TrashIcon } from "@/components/ui/icons/Icons";
import { CategoryFormData, CreateCategoryDrawer } from "./CreateCategoryDrawer";

export default function Categories() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const columns = [
    { key: "name", title: "Category Name", width: 200 },
    { key: "slug", title: "Slug", width: 150 },
    {
      key: "posts",
      title: "Posts",
      width: 80,
      render: (value: number) => (
        <div className="px-2 py-1 bg-blue-50 items-center rounded-full w-16 text-center">
          <p style={{ color: theme.colors.primary }}>{value}</p>
        </div>
      ),
    },
    {
      key: "status",
      title: "Status",
      width: 90,
      render: (value: string) => (
        <div
          className={`px-2 py-1 rounded-full w-20 items-center text-center ${
            value === "Active" ? "bg-green-50" : "bg-red-50"
          }`}
        >
          <p style={{ color: value === "Active" ? "green" : "red" }}>{value}</p>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Business",
      slug: "business",
      posts: 45,
      status: "Active",
    },
    {
      id: 2,
      name: "Technology",
      slug: "technology",
      posts: 32,
      status: "Active",
    },
    {
      id: 3,
      name: "Startups",
      slug: "startups",
      posts: 28,
      status: "Active",
    },
    {
      id: 4,
      name: "Innovation",
      slug: "innovation",
      posts: 19,
      status: "Active",
    },
    {
      id: 5,
      name: "Marketing",
      slug: "marketing",
      posts: 25,
      status: "Inactive",
    },
  ];

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSubmitCategory = (data: CategoryFormData) => {
    console.log("Category data submitted:", data);
    // Here you would typically save the data to your backend
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: () => {},
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: () => {},
      icon: <TrashIcon />,
    },
  ];

  return (
    <div className="flex-1">
      <Table
        title="Category List"
        columns={columns as Column[]}
        data={data}
        addButtonProps={{
          title: "Add Category",
          icon: <PlusIcon />,
          size: "md",
          iconPosition: "left",
        }}
        onAddClick={handleOpenDrawer}
        actionItems={actionItems}
        itemsPerPage={10}
        className="w-full"
        selectable
      />

      <CreateCategoryDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSubmit={handleSubmitCategory}
      />
    </div>
  );
}
