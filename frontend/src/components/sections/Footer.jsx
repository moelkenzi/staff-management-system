import { RiGithubFill, RiSlackFill, RiTwitterXFill, RiYoutubeFill } from "@remixicon/react";

import { Logo } from "../global/icons";
import { NavLink } from "react-router-dom";
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const sections = {
    // solutions: {
    //   title: "Features",
    //   items: [
    //     { label: "Employee Management", to: "#" },
    //     { label: "Attendance Tracking", to: "#" },
    //     { label: "Shift Scheduling", to: "#" },
    //     { label: "Performance Reviews", to: "#" },
    //     { label: "Payroll Management", to: "#" },
    //     { label: "Reports & Analytics", to: "#" },
    //     { label: "Notifications", to: "#" },
    //   ],
    // },
    company: {
      title: "Company",
      items: [
        { label: "About Us", to: "#" },
        { label: "Blog", to: "#" },
        { label: "Careers", to: "#" },
        { label: "Success Stories", to: "#" },
        { label: "Contact", to: "#" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Help Center", to: "#" },
        { label: "Community", to: "#", external: true },
        { label: "Documentation", to: "#" },
        { label: "Privacy Policy", to: "#" },
        { label: "Terms of Service", to: "#" },
        { label: "Security", to: "#" },
        { label: "FAQs", to: "#" },
      ],
    },
    partners: {
      title: "Integrations",
      items: [
        { label: "HR Systems", to: "#", external: true },
        { label: "Payroll Providers", to: "#", external: true },
        { label: "Productivity Tools", to: "#", external: true },
        { label: "API Documentation", to: "#" },
      ],
    },
  };

  return (
    <div className="px-4 xl:px-0">
      <footer id="footer" className="relative mx-auto flex max-w-6xl flex-wrap pt-4">
        {/* Vertical Lines */}
        <div className="pointer-events-none inset-0">
          {/* Left */}
          <div
            className="absolute inset-y-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
            }}>
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                className="stroke-gray-300"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* Right */}
          <div
            className="absolute inset-y-0 right-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
            }}>
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                className="stroke-gray-300"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
        </div>
        <svg
          className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          // }}
        >
          <defs>
            <pattern
              id="diagonal-footer-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64">
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8;
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                );
              })}
            </pattern>
          </defs>
          <rect stroke="none" width="100%" height="100%" fill="url(#diagonal-footer-pattern)" />
        </svg>
        <div className="mr-auto flex w-full justify-between lg:w-fit lg:flex-col">
          <NavLink
            to="/"
            className="flex items-center font-medium text-gray-700 select-none sm:text-sm">
            <Logo className="ml-2 w-20" />

            <span className="sr-only">Staffly Logo (go home)</span>
          </NavLink>

          <div>
            <div className="mt-4 flex items-center">
              {/* Social Icons */}
              <NavLink
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900">
                <RiTwitterXFill className="size-5" />
              </NavLink>
              <NavLink
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900">
                <RiYoutubeFill className="size-5" />
              </NavLink>
              <NavLink
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900">
                <RiGithubFill className="size-5" />
              </NavLink>
              <NavLink
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900">
                <RiSlackFill className="size-5" />
              </NavLink>
            </div>
            <div className="ml-2 hidden text-sm text-gray-700 lg:inline">
              &copy; {CURRENT_YEAR} Staffly Technologies, Inc.
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mt-10 min-w-44 pl-2 lg:mt-0 lg:pl-0">
            <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">{section.title}</h3>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.label} className="text-sm">
                  <NavLink
                    to={item.to}
                    className="text-gray-600 transition-colors duration-200 hover:text-gray-900">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Footer;
