"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon } from "@/components/ui/icons/Icons";

export default function Opinion() {
  const columns = [
    { key: "title", title: "Title", width: 300 },
    { key: "author", title: "Author", width: 150 },
    { key: "topic", title: "Topic", width: 150 },
    {
      key: "comments",
      title: "Comments",
      width: 100,
      render: (value: number) => (
        <div className="px-2 py-1 bg-blue-50 items-center rounded-full w-16 text-center">
          <p style={{ color: theme.colors.primary }}>{value}</p>
        </div>
      ),
    },
    {
      key: "likes",
      title: "Likes",
      width: 80,
      render: (value: number) => (
        <div className="px-2 py-1 bg-green-50 items-center rounded-full w-16 text-center">
          <p style={{ color: "green" }}>{value}</p>
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
      title: "The Future of Remote Work: A New Paradigm",
      author: "John Smith",
      topic: "Work Culture",
      comments: 45,
      likes: 128,
      publishDate: "2024-03-15",
      status: "Published",
    },
    {
      id: 2,
      title: "Why AI Will Not Replace Human Creativity",
      author: "Sarah Johnson",
      topic: "Technology",
      comments: 32,
      likes: 95,
      publishDate: "2024-03-14",
      status: "Draft",
    },
    {
      id: 3,
      title: "Sustainable Business: More Than Just a Trend",
      author: "Mike Wilson",
      topic: "Sustainability",
      comments: 28,
      likes: 156,
      publishDate: "2024-03-13",
      status: "Published",
    },
    {
      id: 4,
      title: "The Role of Leadership in Crisis Management",
      author: "Emily Brown",
      topic: "Leadership",
      comments: 56,
      likes: 203,
      publishDate: "2024-03-12",
      status: "Published",
    },
    {
      id: 5,
      title: "Digital Transformation: Challenges and Opportunities",
      author: "David Lee",
      topic: "Digital",
      comments: 39,
      likes: 167,
      publishDate: "2024-03-11",
      status: "Draft",
    },
  ];

  const handleAddOpinion = () => {
    console.log("Add opinion clicked");
  };

  const handleEditOpinion = (opinion: any) => {
    console.log("Edit opinion:", opinion);
  };

  const handleDeleteOpinion = (opinion: unknown) => {
    console.log("Delete opinion:", opinion);
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditOpinion,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteOpinion,
      icon: <TrashIcon />,
    },
  ];

  return (
    <Table
      title="Opinion Articles"
      columns={columns as Column[]}
      data={data}
      onAddClick={handleAddOpinion}
      actionItems={actionItems}
      itemsPerPage={10}
      className="w-full"
      selectable
    />
  );
}
