"use client";

import React, { useState } from "react";
import { navbarData } from "@/fakeDatas/navbarData";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Link from "next/link";

export default function authNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 flex justify-center px-5 shadow-md font-ibm w-full">
      <div className="flex justify-between items-center w-full md:max-w-screen-xl">
        {/* Logo  */}
        <Link href={"/"} className="flex cursor-pointer items-center">
          <Image
            src={navbarData.logoSrc}
            width={40}
            height={40}
            alt={navbarData.logoAlt}
            className="w-14 lg:w-16"
          />
          <div className="flex flex-col">
            <h2 className="text-sm">{navbarData.title1}</h2>
            <p className="text-md">{navbarData.title2}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
