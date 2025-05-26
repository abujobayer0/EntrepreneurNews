"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon } from "@/components/ui/icons/Icons";

export default function Entrepreneur() {
  const columns = [
    { key: "name", title: "Name", width: 180 },
    { key: "company", title: "Company", width: 180 },
    { key: "industry", title: "Industry", width: 150 },
    {
      key: "followers",
      title: "Followers",
      width: 100,
      render: (value: number) => (
        <div className="px-2 py-1 bg-blue-50 items-center rounded-full w-20 text-center">
          <p style={{ color: theme.colors.primary }}>{value}</p>
        </div>
      ),
    },
    {
      key: "articles",
      title: "Articles",
      width: 80,
      render: (value: number) => (
        <div className="px-2 py-1 bg-green-50 items-center rounded-full w-16 text-center">
          <p style={{ color: "green" }}>{value}</p>
        </div>
      ),
    },
    { key: "joinDate", title: "Join Date", width: 120 },
    {
      key: "featured",
      title: "Featured",
      width: 90,
      render: (value: boolean) => (
        <div
          className={`px-2 py-1 rounded-full w-20 items-center text-center ${
            value ? "bg-purple-50" : "bg-gray-50"
          }`}
        >
          <p style={{ color: value ? "#7C3AED" : "#6B7280" }}>
            {value ? "Yes" : "No"}
          </p>
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
      name: "Alex Thompson",
      company: "TechVision Inc.",
      industry: "Technology",
      followers: 15600,
      articles: 23,
      joinDate: "2023-06-15",
      featured: true,
      status: "Active",
    },
    {
      id: 2,
      name: "Maria Garcia",
      company: "EcoSolutions",
      industry: "Sustainability",
      followers: 8900,
      articles: 15,
      joinDate: "2023-08-22",
      featured: false,
      status: "Active",
    },
    {
      id: 3,
      name: "James Wilson",
      company: "FinTech Pro",
      industry: "Finance",
      followers: 12400,
      articles: 19,
      joinDate: "2023-07-10",
      featured: true,
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah Chen",
      company: "HealthTech Co",
      industry: "Healthcare",
      followers: 6700,
      articles: 11,
      joinDate: "2023-09-05",
      featured: false,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Michael Brown",
      company: "AI Dynamics",
      industry: "AI & ML",
      followers: 19800,
      articles: 28,
      joinDate: "2023-05-30",
      featured: true,
      status: "Active",
    },
  ];

  const handleAddEntrepreneur = () => {
    console.log("Add entrepreneur clicked");
  };

  const handleEditEntrepreneur = (entrepreneur: any) => {
    console.log("Edit entrepreneur:", entrepreneur);
  };

  const handleDeleteEntrepreneur = (entrepreneur: any) => {
    console.log("Delete entrepreneur:", entrepreneur);
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditEntrepreneur,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteEntrepreneur,
      icon: <TrashIcon />,
    },
  ];

  return (
    <Table
      title="Entrepreneur List"
      columns={columns as Column[]}
      data={data}
      onAddClick={handleAddEntrepreneur}
      actionItems={actionItems}
      itemsPerPage={10}
      className="w-full"
      selectable
    />
  );
}
