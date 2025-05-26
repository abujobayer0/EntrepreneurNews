"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon } from "@/components/ui/icons/Icons";

export default function Hero() {
  const columns = [
    { key: "title", title: "Title", width: 250 },
    { key: "subtitle", title: "Subtitle", width: 200 },
    {
      key: "type",
      title: "Type",
      width: 120,
      render: (value: string) => (
        <div
          className={`px-2 py-1 rounded-full w-24 items-center text-center ${
            value === "Main"
              ? "bg-purple-50"
              : value === "Secondary"
              ? "bg-blue-50"
              : "bg-orange-50"
          }`}
        >
          <p
            style={{
              color:
                value === "Main"
                  ? "#7C3AED"
                  : value === "Secondary"
                  ? theme.colors.primary
                  : "#D97706",
            }}
          >
            {value}
          </p>
        </div>
      ),
    },
    { key: "page", title: "Page", width: 150 },
    {
      key: "clicks",
      title: "Clicks",
      width: 80,
      render: (value: number) => (
        <div className="px-2 py-1 bg-blue-50 items-center rounded-full w-16 text-center">
          <p style={{ color: theme.colors.primary }}>{value}</p>
        </div>
      ),
    },
    {
      key: "impressions",
      title: "Impressions",
      width: 100,
      render: (value: number) => (
        <div className="px-2 py-1 bg-green-50 items-center rounded-full w-20 text-center">
          <p style={{ color: "green" }}>{value}</p>
        </div>
      ),
    },
    { key: "startDate", title: "Start Date", width: 120 },
    { key: "endDate", title: "End Date", width: 120 },
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
      title: "Startup Success Stories 2024",
      subtitle: "Learn from Top Entrepreneurs",
      type: "Main",
      page: "Home",
      clicks: 2450,
      impressions: 15600,
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      status: "Active",
    },
    {
      id: 2,
      title: "Tech Innovation Summit",
      subtitle: "Future of Technology",
      type: "Secondary",
      page: "Events",
      clicks: 1280,
      impressions: 8900,
      startDate: "2024-03-15",
      endDate: "2024-04-15",
      status: "Active",
    },
    {
      id: 3,
      title: "Women in Business",
      subtitle: "Breaking Barriers",
      type: "Featured",
      page: "Stories",
      clicks: 1890,
      impressions: 12400,
      startDate: "2024-03-08",
      endDate: "2024-04-08",
      status: "Active",
    },
    {
      id: 4,
      title: "Sustainable Business Guide",
      subtitle: "Green Entrepreneurship",
      type: "Secondary",
      page: "Resources",
      clicks: 980,
      impressions: 6700,
      startDate: "2024-02-15",
      endDate: "2024-03-15",
      status: "Inactive",
    },
    {
      id: 5,
      title: "Digital Transformation",
      subtitle: "Embrace the Future",
      type: "Main",
      page: "Technology",
      clicks: 3200,
      impressions: 19800,
      startDate: "2024-03-10",
      endDate: "2024-04-10",
      status: "Active",
    },
  ];

  const handleAddHero = () => {
    console.log("Add hero clicked");
  };

  const handleEditHero = (hero: any) => {
    console.log("Edit hero:", hero);
  };

  const handleDeleteHero = (hero: any) => {
    console.log("Delete hero:", hero);
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditHero,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteHero,
      icon: <TrashIcon />,
    },
  ];

  return (
    <Table
      title="Hero Sections"
      columns={columns as Column[]}
      data={data}
      onAddClick={handleAddHero}
      actionItems={actionItems}
      itemsPerPage={10}
      className="w-full"
      selectable
    />
  );
}
