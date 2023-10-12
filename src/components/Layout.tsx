"use client";

import React, { ReactNode, useEffect } from "react";
import Nav from "./nav";
import "@/common/style/global.css";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className={`${pathname === "/" ? "h-screen" : ""}`}>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
