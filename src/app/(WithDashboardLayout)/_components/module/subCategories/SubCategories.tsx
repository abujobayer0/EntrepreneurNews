"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, PlusIcon, TrashIcon } from "@/components/ui/icons/Icons";
import {
  CreateSubCategoryDrawer,
  SubCategoryFormData,
} from "./CreateSubCategoryDrawer";

export default function SubCategories() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const columns = [
    { key: "name", title: "Sub Category", width: 180 },
    { key: "parent", title: "Parent Category", width: 180 },
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
      name: "Digital Marketing",
      parent: "Marketing",
      slug: "digital-marketing",
      posts: 18,
      status: "Active",
    },
    {
      id: 2,
      name: "Web Development",
      parent: "Technology",
      slug: "web-development",
      posts: 24,
      status: "Active",
    },
    {
      id: 3,
      name: "Mobile Apps",
      parent: "Technology",
      slug: "mobile-apps",
      posts: 15,
      status: "Active",
    },
    {
      id: 4,
      name: "Small Business",
      parent: "Business",
      slug: "small-business",
      posts: 30,
      status: "Active",
    },
    {
      id: 5,
      name: "E-commerce",
      parent: "Business",
      slug: "e-commerce",
      posts: 22,
      status: "Inactive",
    },
  ];

  const handleEditSubCategory = (subCategory: any) => {
    console.log("Edit sub category:", subCategory);
  };

  const handleDeleteSubCategory = (subCategory: any) => {
    console.log("Delete sub category:", subCategory);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSubmitCategory = (data: SubCategoryFormData) => {
    console.log("Category data submitted:", data);
    // Here you would typically save the data to your backend
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditSubCategory,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteSubCategory,
      icon: <TrashIcon />,
    },
  ];

  return (
    <div>
      <Table
        title="Sub Category List"
        columns={columns as Column[]}
        data={data}
        addButtonProps={{
          title: "Add Sub Category",
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

      <CreateSubCategoryDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onSubmit={handleSubmitCategory}
        categories={[]}
      />
    </div>
  );
}
