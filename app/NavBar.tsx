"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "dashboard", href: "/", id: 1 },
    { label: "issues", href: "/issues/list", id: 2 },
  ];
  return (
    <nav className="flex space-x-6 h-14 items-center px-5 mb-5 border-b">
      <Link href="/">{<AiFillBug />}</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={classNames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
