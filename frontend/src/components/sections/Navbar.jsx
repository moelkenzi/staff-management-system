// import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll";
import { cx } from "../../lib/utils";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import React from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { Logo } from "../global/icons";

export function NavBar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(15);

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}>
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* <NavLink to={siteConfig.baseLinks.home} aria-label="Home"> */}
          <NavLink to={"/#"} aria-label="Home">
            {/* <span className="sr-only">Solar Tech Logo</span> */}
            <Logo className="w-22" />
          </NavLink>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <NavLink className="px-2 py-1 text-gray-900" to="#solutions">
                Features
              </NavLink>
              <NavLink className="px-2 py-1 text-gray-900" to="#employee-management">
                Employee Management
              </NavLink>
              <NavLink className="px-2 py-1 text-gray-900" to="#reports-analytics">
                Reports & Analytics
              </NavLink>
            </div>
          </nav>
          <div className="flex flex-row gap-4 items-center justify-center">
            <Button variant="round" className="hidden h-10 font-semibold sm:block">
              Login
            </Button>
            <Button variant="primary" className="hidden h-10 font-semibold sm:block">
              Get started
            </Button>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}>
            {!open ? (
              <RiMenuFill className="size-6 shrink-0 text-gray-900" aria-hidden />
            ) : (
              <RiCloseFill className="size-6 shrink-0 text-gray-900" aria-hidden />
            )}
          </Button>
        </div>
        {/* Mobile */}
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}>
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <NavLink to="#solutions">Solutions</NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink to="#farm-management">Farm Management</NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink to="#solar-analytics">Analytics</NavLink>
            </li>
          </ul>
          <Button variant="primary" className="text-lg">
            Get started
          </Button>
        </nav>
      </div>
    </header>
  );
}
