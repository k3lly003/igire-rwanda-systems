"use client";

import React, { useState, useEffect } from "react";
import { Instagram, Facebook, X, Youtube } from "lucide-react";
import { usePathname } from "next/navigation";
import DropDown from "../ui/dropDown";

const navbarData = {
  logoSrc: "/Igire_Rwanda_Logo.png",
  logoAlt: "Logo",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { component: <DropDown /> },
    { label: "Careers", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  connectButtonText: "Contact Us",
};

const socialAccounts = [
  {
    icon: <Instagram size={24} />,
    href: "https://www.instagram.com/shecancode_bootcamp",
  },
  {
    icon: <Facebook size={24} />,
    href: "https://www.facebook.com/igirerwandaorganization",
  },
  {
    icon: <Youtube size={24} />,
    href: "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
  },
  {
    icon: <X size={24} />,
    href: "https://twitter.com/ShecancodeRW",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Hide top bar when scrolling down past 100 pixels
      if (currentScrollY > 100 && scrollDirection === "down") {
        setTopBarVisible(false);
      }
      // Show top bar when scrolling up
      else if (scrollDirection === "up") {
        setTopBarVisible(true);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollDirection]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Bar with Transition */}
      <div
        className={`
          hidden lg:block bg-orange-500 w-full px-4 py-2 transition-all duration-300 ease-in-out
          ${
            topBarVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }
        `}
      >
        <div className="max-w-screen-xl w-full flex justify-end gap-4 mx-auto text-sm text-white">
          {socialAccounts.map(({ icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
            >
              {icon}
            </a>
          ))}
          <span className="border-r border-white"></span>
          <span className="transition-colors duration-300">
            +250 788 293 894
          </span>
          <span className="border-r border-white"></span>
          <span className="transition-colors duration-300">
            education@igirerwanda.org
          </span>
          <span className="border-r border-white"></span>
          <span className="transition-colors duration-300">
            <a
              href="https://maps.app.goo.gl/PfZx3y8GxeK4WjDBA"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300"
            >
              KG 549 St, 36 Kigali
            </a>
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`
        bg-white sticky top-0 z-50 flex justify-center px-5 py-3 shadow-md font-sans w-full
        transition-all duration-300 ease-in-out
        ${
          topBarVisible
            ? "translate-y-0"
            : "-translate-y-full lg:-translate-y-1/2"
        }
      `}
      >
        <div className="flex justify-between items-center w-full md:max-w-screen-xl">
          {/* Logo and Branding */}
          <a href="/" className="flex cursor-pointer items-center">
            <img
              src={navbarData.logoSrc}
              width={40}
              height={40}
              alt={navbarData.logoAlt}
              className="w-14 lg:w-16"
            />
            <div className="flex flex-col ml-2">
              <span className="text-sm">IGIRE RWANDA</span>
              <span className="text-sm">ORGANIZATION</span>
            </div>
          </a>
          {/* Desktop Menu links */}
          <div className="hidden lg:flex justify-center items-center space-x-12">
            {navbarData.links.map((link, index) => {
              if (link.component) {
                return (
                  <div key={index} className="relative">
                    {link.component}
                  </div>
                );
              }

              return (
                link.label !== "Contact" && (
                  <a
                    key={index}
                    href={link.href}
                    className={`
        text-lg transition-all duration-300
        ${
          pathname === link.href
            ? "text-orange-500 font-bold"
            : "text-gray-800 hover:text-orange-500"
        }
      `}
                  >
                    {link.label}
                  </a>
                )
              );
            })}
          </div>

          {/* Hamburger Menu toggle for mobile */}
          <div className="lg:hidden flex items-center gap-8">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-md p-6">
              <div className="flex flex-col space-y-10">
                {navbarData.links.map(({ label, href }, index) => {
                  // Exclude Contact from main menu items
                  if (label === "Contact") return null;

                  return (
                    <a
                      key={index}
                      href={href}
                      className={`
                        font-medium flex justify-between items-center
                        transition-all duration-300
                        ${
                          pathname === href
                            ? "text-orange-500 font-bold"
                            : "text-gray-600 hover:text-orange-500"
                        }
                      `}
                    >
                      {label}
                    </a>
                  );
                })}
                <a
                  href="/contact"
                  className={`
                    px-6 py-3 font-bold
                    ${
                      pathname === "/contact"
                        ? "bg-green-600 text-white"
                        : "bg-green-800 hover:bg-green-600 text-white"
                    }
                  `}
                >
                  {navbarData.connectButtonText}
                </a>
              </div>
            </div>
          )}

          {/* Contact Us Button */}
          <a
            href="/contact"
            className={`
              hidden lg:flex px-6 py-3 font-bold
              ${
                pathname === "/contact"
                  ? "bg-green-600 text-white"
                  : "bg-green-800 hover:bg-green-600 text-white"
              }
            `}
          >
            {navbarData.connectButtonText}
          </a>
        </div>
      </nav>
    </header>
  );
}
