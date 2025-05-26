"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/entrepreneur-logo.png";

export default function BrandLogo() {
  return (
    <Link href="/" className="block md:-ml-10 w-[100px] md:w-[274px]">
      <Image
        src={logo}
        alt="Brand Logo"
        width={274} // max width (desktop)
        height={274 / 4}
        className="w-full h-auto"
        priority
      />
    </Link>
  );
}
