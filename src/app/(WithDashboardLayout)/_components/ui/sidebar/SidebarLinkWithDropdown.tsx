"use client";

import React, { useState } from "react";
import { theme } from "@/constants/theme";
import DynamicSvgIcon from "@/components/ui/icons/DynamicSvgIcon";
import { ChevronDownIcon } from "@/components/ui/icons/Icons";

export interface NavItem {
  title: string;
  path: string;
  icon?: React.ReactNode | ((isActive: boolean) => React.ReactNode);
  children?: NavItem[];
}

interface SidebarLinkWithDropdownProps {
  item: NavItem;
  isActive: boolean;
  activeChildPath?: string;
  level?: number;
  onNavigate: (path: string) => void;
}

const SidebarLinkWithDropdown: React.FC<SidebarLinkWithDropdownProps> = ({
  item,
  isActive,
  activeChildPath,
  level = 0,
  onNavigate,
}) => {
  const hasChildren = item.children && item.children.length > 0;

  const isPathInChildren = (item: NavItem, path: string): boolean => {
    if (!item.children) return false;
    return item.children.some(
      (child) =>
        child.path === path ||
        path.startsWith(child.path + "/") ||
        isPathInChildren(child, path)
    );
  };

  const isInitialOpen =
    isActive || (activeChildPath && isPathInChildren(item, activeChildPath));

  const [isOpen, setIsOpen] = useState(isInitialOpen);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const isActiveRoute =
    isActive ||
    (activeChildPath && activeChildPath.startsWith(item.path + "/"));
  const hasActiveChild =
    activeChildPath && hasChildren && isPathInChildren(item, activeChildPath);
  const isParentActive = isActiveRoute || hasActiveChild;

  const leftPadding = level * 12;

  const handleLinkClick = () => {
    if (hasChildren) {
      toggleDropdown();
    } else {
      onNavigate(item.path);
    }
  };

  return (
    <div>
      <div className="my-2">
        <button
          onClick={handleLinkClick}
          className={`flex items-center py-2.5 px-3 my-0.5 ml-2 rounded-[4px] h-[35px] transition-colors cursor-pointer w-full ${
            level > 0
              ? isParentActive
                ? "bg-gray-200"
                : "hover:bg-gray-100 active:bg-gray-100"
              : isParentActive
              ? "bg-[#2B3589] hover:bg-[#4a55a7]"
              : "hover:bg-gray-200 active:bg-gray-200"
          }`}
          style={{ paddingLeft: leftPadding + 12 }}
        >
          {item.icon && (
            <div>
              <DynamicSvgIcon isActive={Boolean(isParentActive)}>
                {typeof item.icon === "function"
                  ? item.icon(Boolean(isParentActive))
                  : item.icon}
              </DynamicSvgIcon>
            </div>
          )}

          <p
            className={`ml-3 font-medium flex-1 flex ${
              level > 0 ? "text-sm" : ""
            }`}
            style={{
              color:
                level > 0
                  ? theme.colors.black
                  : isParentActive
                  ? "white"
                  : theme.colors.black,
            }}
          >
            {item.title}
          </p>

          {hasChildren && (
            <div
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDownIcon
                color={level > 0 ? "black" : isParentActive ? "white" : "black"}
              />
            </div>
          )}
        </button>
      </div>

      {hasChildren && isOpen && (
        <div
          className="pl-3 ml-1 border-l border-gray-200"
          style={{
            marginLeft: leftPadding,
            position: "relative",
            zIndex: level + 1,
          }}
        >
          {item.children?.map((child) => (
            <SidebarLinkWithDropdown
              key={child.path}
              item={child}
              isActive={activeChildPath === child.path}
              activeChildPath={activeChildPath}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarLinkWithDropdown;
