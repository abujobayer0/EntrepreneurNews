import Image from "next/image";
import React from "react";

interface NavbarProps {
  className?: string;
}

const DashboardNavbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row py-2 justify-end items-center bg-white w-full ${className}`}
    >
      {/* Right side - Notifications and Profile */}
      <div className="flex flex-row items-center space-x-2">
        <button className="flex flex-row items-center space-x-3 pl-2">
          <div className="size-9 lg:size-12 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
              }
              className="h-full w-full object-cover"
              width={100}
              height={100}
              alt="profile"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
