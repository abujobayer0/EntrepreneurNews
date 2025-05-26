"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  id: number;
  title: string;
  link: string;
}

interface NavItem {
  id: number;
  title: string;
  link: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export default function NavbarLinks() {
  const [t] = useTranslation();
  const [hoverState, setHoverState] = useState<Record<number, boolean>>({});
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const navItems: NavItem[] = [
    { id: 1, title: t("home.navbarLinks.items.home"), link: "/" },
    { id: 2, title: t("home.navbarLinks.items.history"), link: "/history" },
    { id: 3, title: t("home.navbarLinks.items.research"), link: "/research" },
    {
      id: 4,
      title: t("home.navbarLinks.items.countryNature"),
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 41,
          title: t(
            "home.navbarLinks.dropdowns.countryNature.politicsDiplomacy"
          ),
          link: "/politics-diplomacy",
        },
        {
          id: 42,
          title: t(
            "home.navbarLinks.dropdowns.countryNature.agriculturePolicy"
          ),
          link: "/agriculture-policy",
        },
        {
          id: 43,
          title: t(
            "home.navbarLinks.dropdowns.countryNature.foreignEmployment"
          ),
          link: "/foreign-employment",
        },
      ],
    },
    { id: 5, title: t("home.navbarLinks.items.sports"), link: "/sports" },
    {
      id: 6,
      title: t("home.navbarLinks.items.artCulture"),
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 61,
          title: t("home.navbarLinks.dropdowns.artCulture.literature"),
          link: "/literature",
        },
        {
          id: 62,
          title: t("home.navbarLinks.dropdowns.artCulture.cinema"),
          link: "/cinema",
        },
        {
          id: 63,
          title: t("home.navbarLinks.dropdowns.artCulture.music"),
          link: "/music",
        },
      ],
    },
    { id: 7, title: t("home.navbarLinks.items.economy"), link: "/economy" },
    {
      id: 8,
      title: t("home.navbarLinks.items.specialArticles"),
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 81,
          title: t("home.navbarLinks.dropdowns.specialArticles.columns"),
          link: "/columns",
        },
        {
          id: 82,
          title: t(
            "home.navbarLinks.dropdowns.specialArticles.featureArticles"
          ),
          link: "/special-articles",
        },
      ],
    },
    {
      id: 9,
      title: t("home.navbarLinks.items.healthcare"),
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 91,
          title: t("home.navbarLinks.dropdowns.healthcare.nutrition"),
          link: "/nutrition",
        },
        {
          id: 92,
          title: t("home.navbarLinks.dropdowns.healthcare.diseasePrevention"),
          link: "/disease-prevention",
        },
      ],
    },
    {
      id: 10,
      title: t("home.navbarLinks.items.socialPolicy"),
      link: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 101,
          title: t("home.navbarLinks.dropdowns.socialPolicy.education"),
          link: "/education",
        },
        {
          id: 102,
          title: t("home.navbarLinks.dropdowns.socialPolicy.socialIssues"),
          link: "/social-issues",
        },
      ],
    },
    { id: 11, title: t("home.navbarLinks.items.islamic"), link: "/islamic" },
  ];

  const handleHoverIn = (id: number) => {
    setHoverState((prev) => ({ ...prev, [id]: true }));
  };

  const handleHoverOut = (id: number) => {
    if (!isMobile) {
      setHoverState((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleDropdown = (id: number) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="relative w-full mx-auto md:max-w-7xl">
      {/* Desktop Navigation */}
      <div className="flex w-full justify-center items-center flex-col md:flex-row gap-1 flex-wrap">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="mb-1 md:mb-2 mr-1 md:mr-2 w-full md:w-auto relative"
            onMouseEnter={() => handleHoverIn(item.id)}
            onMouseLeave={() => handleHoverOut(item.id)}
          >
            {item.hasDropdown ? (
              <button
                onClick={() => toggleDropdown(item.id)}
                className="flex flex-row justify-between items-center px-2 py-2 md:py-3 w-full hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-sm font-medium text-gray-800">
                  {item.title}
                </span>
                <ChevronDown className="ml-1 w-4 h-4 text-gray-500" />
              </button>
            ) : (
              <Link
                href={item.link}
                className="flex flex-row justify-between items-center px-2 py-2 md:py-3 w-full hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-sm font-medium text-gray-800">
                  {item.title}
                </span>
              </Link>
            )}

            {/* Dropdown Menu */}
            {item.hasDropdown &&
              (hoverState[item.id] || openDropdownId === item.id) && (
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white hover:bg-gray-100 ring-1 ring-gray-50 ring-opacity-5 z-50">
                  <div className="py-1">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.id}
                        href={dropdownItem.link}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
