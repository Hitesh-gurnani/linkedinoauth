"use client";

import Link from "next/link";
import {
  Compass,
  Users,
  PlaySquare,
  Briefcase,
  Puzzle,
  Grid3x3,
  Menu,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#", icon: Compass, label: "Top Content" },
  { href: "#", icon: Users, label: "People" },
  { href: "#", icon: PlaySquare, label: "Learning" },
  { href: "#", icon: Briefcase, label: "Jobs" },
  { href: "#", icon: Puzzle, label: "Games" },
  { href: "#", icon: Grid3x3, label: "Get the app" },
];

const LinkedInLogo = () => (
  <Link href="/">
    <svg
      role="img"
      aria-label="LinkedIn"
      className="h-[34px] w-[135px] text-primary-blue"
      viewBox="0 0 135 34"
      fill="currentColor"
    >
      <title>LinkedIn</title>
      <g>
        <path d="M11,26.1H1.9V8.6h9.1V26.1z M6.5,5.1C4.4,5.1,2.8,3.9,2.8,2.5C2.8,1.1,4.4,0,6.5,0c2.1,0,3.7,1.1,3.7,2.5 C10.2,3.9,8.6,5.1,6.5,5.1z M54.2,26.1h-9.1V16.8c0-2.3-0.8-3.9-2.9-3.9c-1.6,0-2.5,1.1-2.9,2.1c-0.1,0.4-0.2,0.9-0.2,1.4v9.7h-9.1 c0,0,0.1-16,0.1-17.5h9.1v3.9c0.5-1.9,3.3-4.5,8.2-4.5c5.8,0,10.2,3.7,10.2,11.6V26.1z M76.9,26.1h-9.1V8.6h9.1V26.1z M72.4,5.1 c-2.1,0-3.7-1.1-3.7-2.5c0-1.4,1.6-2.5,3.7-2.5s3.7,1.1,3.7,2.5C76.1,3.9,74.5,5.1,72.4,5.1z M94.6,26.1h-9.1v-9.4 c0-2.5-1.4-4.3-3.8-4.3s-3.8,1.8-3.8,4.3v9.4h-9.1V8.6h9.1v3.5c1.2-2.3,3.3-3.6,7.2-3.6c3.2,0,5.7,1,7.2,3.4 C94.8,13.3,94.6,26.1,94.6,26.1z M125.4,8.6H115v17.5h11.2v-3.7H119V20h6.1v-3.6h-6.1v-4.1h7.3V8.6z"></path>
        <g>
          <path d="M36,9.3c-2.8,0-4.6,1.8-4.6,4.3v12.5h-9.1V8.6h9.1v2.9C32.4,9.6,34.1,8,37.3,8c4.6,0,8.2,3,8.2,9.5 c0,6.5-3.6,9.6-8.2,9.6C34.5,27.1,32.8,26.1,31.7,24.8z M36,23.6c2.8,0,4.6-1.8,4.6-4.9c0-3.1-1.8-4.9-4.6-4.9s-4.6,1.8-4.6,4.9 C31.4,21.8,33.2,23.6,36,23.6z"></path>
        </g>
      </g>
    </svg>
  </Link>
);

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-[1128px] items-center justify-between px-4">
        <h2 className="text-2xl font-bold">Linkedin</h2>
        <div className="flex h-full items-center">
          <nav className="hidden h-full lg:flex">
            <ul className="flex h-full items-center gap-x-2">
              {navItems.map(({ href, icon: Icon, label }) => (
                <li key={label} className="h-full">
                  <Link
                    href={href}
                    className="flex h-full flex-col items-center justify-center gap-y-1 text-medium-gray hover:text-dark-gray transition-colors duration-200 group px-3"
                  >
                    <Icon size={24} strokeWidth={1.5} />
                    <span className="text-caption font-normal leading-tight">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex h-full items-center gap-2 pl-2">
            <div className="h-full py-5">
              <div className="h-full border-l border-gray-300"></div>
            </div>
            <Link
              href="#"
              className="px-4 py-2 text-base font-semibold text-medium-gray hover:bg-gray-100 rounded-md transition-colors"
            >
              Join now
            </Link>
            <Link
              href="#"
              className="px-6 py-2.5 text-base font-semibold text-primary-blue border border-primary-blue rounded-full hover:bg-blue-100/50 hover:text-blue-700 transition-all"
            >
              Sign in
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-medium-gray p-2"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border-gray/70 bg-white">
          <div className="px-4 pt-2 pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-x-4 p-2 text-medium-gray hover:bg-gray-100 rounded-md"
                >
                  <Icon size={24} strokeWidth={1.5} />
                  <span className="text-body-lg font-semibold">{label}</span>
                </Link>
              ))}
            </nav>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="w-full text-center px-6 py-3 text-base font-semibold text-medium-gray hover:bg-gray-200/70 rounded-full transition-colors"
              >
                Join now
              </Link>
              <Link
                href="#"
                className="w-full text-center px-6 py-2.5 text-base font-semibold text-primary-blue border border-primary-blue rounded-full hover:bg-secondary-blue/20 transition-all"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
