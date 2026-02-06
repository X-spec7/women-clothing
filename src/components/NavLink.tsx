"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";

type NextNavLinkProps = Omit<React.ComponentProps<typeof Link>, "className"> & {
  className?: string;
  activeClassName?: string;
  /**
   * If true, only marks active when pathname matches exactly.
   * If false (default), marks active when pathname starts with href (string href only).
   */
  exact?: boolean;
}

export function NavLink({ className, activeClassName, href, exact = false, ...props }: NextNavLinkProps) {
  const pathname = usePathname();

  const hrefString = typeof href === "string" ? href : null;
  const isActive =
    hrefString == null
      ? false
      : exact
        ? pathname === hrefString
        : pathname === hrefString || pathname.startsWith(hrefString + "/");

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
      {...props}
    />
  );
}
