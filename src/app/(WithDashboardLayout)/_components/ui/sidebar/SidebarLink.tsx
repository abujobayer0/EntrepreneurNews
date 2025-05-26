import React from "react";
import { theme } from "@/constants/theme";

interface SidebarLinkProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon,
  title,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex-row items-center py-2.5 px-3 my-0.5 rounded-lg transition-colors ${
        isActive
          ? "bg-blue-50 hover:bg-blue-100"
          : "hover:bg-gray-50 active:bg-gray-100"
      }`}
    >
      <div>
        {React.isValidElement(icon)
          ? React.cloneElement(icon, {
              // Only pass className if the icon supports it
              ...(icon.props &&
              typeof icon.props === "object" &&
              icon.props !== null &&
              "className" in icon.props
                ? { className: isActive ? "text-primary" : "text-text" }
                : {}),
              // Only pass color if the icon supports it
              ...(icon.props &&
              typeof icon.props === "object" &&
              icon.props !== null &&
              "color" in icon.props
                ? { color: isActive ? theme.colors.primary : theme.colors.text }
                : {}),
            })
          : icon}
      </div>
      <p
        className={`ml-3 font-medium text-sm`}
        style={{
          color: isActive ? theme.colors.primary : theme.colors.text,
        }}
      >
        {title}
      </p>
    </button>
  );
};

export default SidebarLink;
