/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Table, {
  Column,
} from "@/app/(WithDashboardLayout)/_components/ui/Table";
import { theme } from "@/constants/theme";
import { EditIcon, TrashIcon, PlusIcon } from "@/components/ui/icons/Icons";
import { useRouter } from "next/navigation";

export default function Author() {
  const router = useRouter();

  // Sample data for the table
  const columns = [
    { key: "active", title: "Active Role", width: 100 },
    { key: "name", title: "Name", width: 140 },
    { key: "position", title: "Position", width: 100 },
    { key: "email", title: "Email", width: 200 },
    { key: "phone", title: "Phone", width: 120 },
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
      active: true,
      name: "Courtney Henry",
      position: "Economist",
      email: "kira.crag@example.com",
      phone: "(903) 555-0105",
      posts: 12,
      status: "Active",
    },
    {
      id: 2,
      active: false,
      name: "Kathryn Murphy",
      position: "Economist",
      email: "murphy.mil@example.com",
      phone: "(684) 555-0102",
      posts: 34,
      status: "Active",
    },
    {
      id: 3,
      active: false,
      name: "Jane Cooper",
      position: "Economist",
      email: "dianna.chan@example.com",
      phone: "(306) 555-1271",
      posts: 1,
      status: "Inactive",
    },
    {
      id: 4,
      active: false,
      name: "Dianne Russell",
      position: "Economist",
      email: "tim.jenning@example.com",
      phone: "(605) 555-0120",
      posts: 4,
      status: "Active",
    },
    {
      id: 5,
      active: false,
      name: "Albert Flores",
      position: "Professor",
      email: "debra.baker@example.com",
      phone: "(319) 555-0115",
      posts: 9,
      status: "Active",
    },
    {
      id: 6,
      active: false,
      name: "Eleanor Pena",
      position: "Professor",
      email: "tia.sander@example.com",
      phone: "(302) 555-0107",
      posts: 23,
      status: "Inactive",
    },
    {
      id: 7,
      active: true,
      name: "Jenny Wilson",
      position: "Professor",
      email: "ken.oliven@example.com",
      phone: "(671) 555-0110",
      posts: 45,
      status: "Active",
    },
    {
      id: 8,
      active: true,
      name: "Leslie Alexander",
      position: "Professor",
      email: "georgia.young@example.com",
      phone: "(316) 555-0116",
      posts: 32,
      status: "Active",
    },
    {
      id: 9,
      active: true,
      name: "Floyd Miles",
      position: "Poet",
      email: "curtis.weaver@example.com",
      phone: "(226) 555-0120",
      posts: 20,
      status: "Active",
    },
    {
      id: 10,
      active: true,
      name: "Cameron Williamson",
      position: "Poet",
      email: "jackson.gra@example.com",
      phone: "(603) 555-0123",
      posts: 27,
      status: "Active",
    },
  ];

  // Action handlers
  const handleAddAuthor = () => {
    router.push("/authors/add-author");
  };

  const handleEditAuthor = (author: any) => {
    console.log("Edit author:", author);
  };

  const handleDeleteAuthor = (author: any) => {
    console.log("Delete author:", author);
  };

  // Dropdown menu items
  const actionItems = [
    {
      label: "Edit",
      onClick: handleEditAuthor,
      icon: <EditIcon />,
    },
    {
      label: "Delete",
      onClick: handleDeleteAuthor,
      icon: <TrashIcon />,
    },
  ];

  return (
    <div className="flex-1 p-4">
      <Table
        title="Author List"
        columns={columns as Column[]}
        data={data}
        onAddClick={handleAddAuthor}
        addButtonProps={{
          title: "Add Author",
          icon: <PlusIcon />,
          size: "md",
          iconPosition: "left",
          route: "/authors/add-author",
        }}
        actionItems={actionItems}
        itemsPerPage={10}
        className="w-full"
        selectable
      />
    </div>
  );
}
