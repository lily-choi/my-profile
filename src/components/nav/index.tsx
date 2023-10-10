"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  const MENU = [
    {
      name: "Home",
      page: "/",
    },
    {
      name: "About",
      page: "/about",
    },
    {
      name: "Projects",
      page: "/my-projects",
    },
    {
      name: "Contact",
      page: "/my-contact",
    },
  ];

  return (
    <header>
      <ul className="flex flex-wrap flex-row justify-around">
        {MENU.map((menu, i) => {
          return (
            <li key={i}>
              <Link href={menu.page}>{menu.name}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
