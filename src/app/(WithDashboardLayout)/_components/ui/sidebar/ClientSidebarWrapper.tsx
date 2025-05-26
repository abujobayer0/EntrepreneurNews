"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function ClientSidebarWrapper() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Menu Icon */}
      <div className="md:hidden fixed top-5 left-4 z-50">
        <button onClick={toggleSidebar}>
          <Menu className="h-6 w-6 text-black" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          />
          <div className="fixed top-0 bottom-0 left-0 w-[230px] bg-white z-50 shadow-lg">
            <Sidebar isOpen={true} onClose={toggleSidebar} />
          </div>
        </>
      )}
    </>
  );
}
