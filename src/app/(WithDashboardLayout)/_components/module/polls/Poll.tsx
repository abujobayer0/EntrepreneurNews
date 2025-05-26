"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon } from "@/components/ui/icons/Icons";

export default function Poll() {
  const columns = [
    { key: "question", title: "Question", width: 300 },
    {
      key: "options",
      title: "Options",
      width: 200,
      render: (value: string[]) => (
        <p style={{ color: theme.colors.text }}>{value.join(", ")}</p>
      ),
    },
    {
      key: "totalVotes",
      title: "Total Votes",
      width: 100,
      render: (value: number) => (
        <div className="px-2 py-1 bg-blue-50 items-center rounded-full w-20 text-center">
          <p style={{ color: theme.colors.primary }}>{value}</p>
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
            value === "Active"
              ? "bg-green-50"
              : value === "Ended"
              ? "bg-red-50"
              : "bg-yellow-50"
          }`}
        >
          <p
            style={{
              color:
                value === "Active"
                  ? "green"
                  : value === "Ended"
                  ? "red"
                  : "#B45309",
            }}
          >
            {value}
          </p>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      question: "What is the biggest challenge in starting a business?",
      options: ["Funding", "Market Research", "Team Building", "Competition"],
      totalVotes: 256,
      startDate: "2024-03-01",
      endDate: "2024-03-15",
      status: "Ended",
    },
    {
      id: 2,
      question: "Which technology trend will dominate in 2024?",
      options: ["AI", "Blockchain", "IoT", "VR/AR"],
      totalVotes: 189,
      startDate: "2024-03-10",
      endDate: "2024-03-25",
      status: "Active",
    },
    {
      id: 3,
      question: "What is your preferred work environment?",
      options: ["Remote", "Hybrid", "Office", "Flexible"],
      totalVotes: 423,
      startDate: "2024-03-05",
      endDate: "2024-03-20",
      status: "Active",
    },
    {
      id: 4,
      question: "Most important skill for entrepreneurs?",
      options: ["Leadership", "Innovation", "Finance", "Marketing"],
      totalVotes: 167,
      startDate: "2024-03-15",
      endDate: "2024-03-30",
      status: "Scheduled",
    },
    {
      id: 5,
      question: "Best marketing channel for startups?",
      options: ["Social Media", "Content Marketing", "SEO", "Paid Ads"],
      totalVotes: 298,
      startDate: "2024-02-25",
      endDate: "2024-03-10",
      status: "Ended",
    },
  ];

  const handleAddPoll = () => {
    console.log("Add poll clicked");
  };

  const handleEditPoll = (poll: any) => {
    console.log("Edit poll:", poll);
  };

  const handleDeletePoll = (poll: any) => {
    console.log("Delete poll:", poll);
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditPoll,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeletePoll,
      icon: <TrashIcon />,
    },
  ];

  return (
    <Table
      title="Poll List"
      columns={columns as Column[]}
      data={data}
      onAddClick={handleAddPoll}
      actionItems={actionItems}
      itemsPerPage={10}
      className="w-full"
      selectable
    />
  );
}
