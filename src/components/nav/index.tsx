"use client";

import React from "react";
import Link from "next/link";

export default function Nav() {
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
    <header className="flex flex-wrap flex-row justify-between py-10 px-20 mb-36">
      <h1 className="font-semibold text-xl cursor-pointer">
        <Link href={"/"} className="hover:no-underline">
          Hyeji Choi
        </Link>
      </h1>
      <ul className="flex flex-wrap flex-row justify-around">
        {MENU.map((menu, i) => {
          return (
            <li key={i} className="px-6 last-of-type:pr-0 ">
              <Link
                href={menu.page}
                className="text-gray-400 hover:text-gray-800 underline-offset-4"
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
