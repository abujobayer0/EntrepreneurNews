"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon } from "@/components/ui/icons/Icons";

export default function Careers() {
  const columns = [
    { key: "title", title: "Job Title", width: 250 },
    { key: "company", title: "Company", width: 180 },
    { key: "location", title: "Location", width: 150 },
    {
      key: "type",
      title: "Job Type",
      width: 120,
      render: (value: string) => (
        <div
          className={`px-2 py-1 rounded-full w-24 items-center text-center ${
            value === "Full-time"
              ? "bg-blue-50"
              : value === "Part-time"
              ? "bg-purple-50"
              : "bg-orange-50"
          }`}
        >
          <p
            style={{
              color:
                value === "Full-time"
                  ? theme.colors.primary
                  : value === "Part-time"
                  ? "#7C3AED"
                  : "#D97706",
            }}
          >
            {value}
          </p>
        </div>
      ),
    },
    { key: "salary", title: "Salary Range", width: 150 },
    { key: "postedDate", title: "Posted Date", width: 120 },
    {
      key: "applications",
      title: "Applications",
      width: 100,
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
      title: "Senior Software Engineer",
      company: "TechVision Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120K - $150K",
      postedDate: "2024-03-15",
      applications: 45,
      status: "Active",
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "Growth Co",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90K - $110K",
      postedDate: "2024-03-14",
      applications: 32,
      status: "Active",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Part-time",
      salary: "$60K - $80K",
      postedDate: "2024-03-13",
      applications: 28,
      status: "Active",
    },
    {
      id: 4,
      title: "Content Writer",
      company: "Media Corp",
      location: "Chicago, IL",
      type: "Contract",
      salary: "$40K - $60K",
      postedDate: "2024-03-12",
      applications: 56,
      status: "Inactive",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Solutions",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$100K - $130K",
      postedDate: "2024-03-11",
      applications: 39,
      status: "Active",
    },
  ];

  const handleAddJob = () => {
    console.log("Add job clicked");
  };

  const handleEditJob = (job: any) => {
    console.log("Edit job:", job);
  };

  const handleDeleteJob = (job: any) => {
    console.log("Delete job:", job);
  };

  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditJob,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteJob,
      icon: <TrashIcon />,
    },
  ];

  return (
    <Table
      title="Job Listings"
      columns={columns as Column[]}
      data={data}
      onAddClick={handleAddJob}
      actionItems={actionItems}
      itemsPerPage={10}
      className="w-full"
      selectable
    />
  );
}
