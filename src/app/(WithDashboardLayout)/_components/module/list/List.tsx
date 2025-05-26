"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon } from "@/components/ui/icons/Icons";

export default function List() {
  const columns = [
    { key: "title", title: "Title", width: 250 },
    { key: "category", title: "Category", width: 150 },
    { key: "author", title: "Author", width: 150 },
    {
      key: "divs",
      title: "divs",
      width: 100,
      render: (value: number) => (
        <div className="px-2 py-1 bg-blue-50 items-center rounded-full w-20 text-center">
          <p style={{ color: theme.colors.primary }}>{value}</p>
        </div>
      ),
    },
    { key: "publishDate", title: "Publish Date", width: 120 },
    {
      key: "status",
      title: "Status",
      width: 90,
      render: (value: string) => (
        <div
          className={`px-2 py-1 rounded-full w-20 items-center text-center ${
            value === "Published" ? "bg-green-50" : "bg-yellow-50"
          }`}
        >
          <p style={{ color: value === "Published" ? "green" : "#B45309" }}>
            {value}
          </p>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      title: "10 Tips for Starting a Successful Business",
      category: "Business",
      author: "John Smith",
      divs: 1250,
      publishDate: "2024-03-15",
      status: "Published",
    },
    {
      id: 2,
      title: "The Future of AI in Business",
      category: "Technology",
      author: "Sarah Johnson",
      divs: 980,
      publishDate: "2024-03-14",
      status: "Draft",
    },
    {
      id: 3,
      title: "Essential Marketing Strategies",
      category: "Marketing",
      author: "Mike Wilson",
      divs: 756,
      publishDate: "2024-03-13",
      status: "Published",
    },
    {
      id: 4,
      title: "Building a Strong Team Culture",
      category: "Management",
      author: "Emily Brown",
      divs: 543,
      publishDate: "2024-03-12",
      status: "Published",
    },
    {
      id: 5,
      title: "Innovation in Startups",
      category: "Startups",
      author: "David Lee",
      divs: 892,
      publishDate: "2024-03-11",
      status: "Draft",
    },
  ];

  const handleAddArticle = () => {
    console.log("Add article clicked");
  };

  const handleEditArticle = (article: any) => {
    console.log("Edit article:", article);
  };

  const handleDeleteArticle = (article: any) => {
    console.log("Delete article:", article);
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditArticle,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteArticle,
      icon: <TrashIcon />,
    },
  ];

  return (
    <Table
      title="Article List"
      columns={columns as Column[]}
      data={data}
      onAddClick={handleAddArticle}
      actionItems={actionItems}
      itemsPerPage={10}
      className="w-full"
      selectable
    />
  );
}
