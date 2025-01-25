"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const programsData = {
  links: [
    { label: "All Programs", href: "/programs" },
    { label: "SheCanCode", href: "/programs/shecancode" },
    { label: "AWE", href: "/programs/awe" },
  ],
};

export default function DropDown() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-lg font-normal hover:text-orange-500 transition-all">
        programs
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12">
        {programsData.links.map(({ label, href }, index) => (
          <a key={index} href={href}>
            <DropdownMenuItem
              className={`text-sm font-medium transition-all flex justify-center items-center${
                pathname === href
                  ? "text-orange-500 font-bold"
                  : "text-gray-800 hover:text-orange-500"
              }`}
            >
              {label}
            </DropdownMenuItem>
          </a>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
