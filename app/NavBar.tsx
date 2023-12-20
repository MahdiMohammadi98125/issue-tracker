import { link } from "fs";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "dashboard", href: "/", id: 1 },
    { label: "issues", href: "/dashboard", id: 2 },
  ];
  return (
    <nav className="flex space-x-6 h-14 items-center px-5 mb-5 border-b">
      <Link href="/">{<AiFillBug />}</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
