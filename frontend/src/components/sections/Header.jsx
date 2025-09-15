import { useState } from "react";
import { Logo } from "../global/icons.tsx";
import { Button } from "../ui/button.tsx";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    path: "/#",
  },
  {
    id: 2,
    name: "Features",
    path: "/#",
  },
  {
    id: 3,
    name: "Testimonial",
    path: "/#",
  },
  {
    id: 4,
    name: "Pricing",
    path: "/#",
  },
  {
    id: 5,
    name: "FAQ",
    path: "/#",
  },
];

const Header = () => {
  const [activeId, setActiveId] = useState(NavLinks[0]?.id ?? 1);

  return (
    <header className="flex flex-row items-center justify-between px-10 py-2 border-b border-gray-300">
      <Logo />
      <nav className="bg-[#fbfbfb] p-[4px] rounded-[14px]">
        <ul className="flex flex-row gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          {NavLinks.map((link) => {
            const isActive = link.id === activeId;
            return (
              <li key={link.id}>
                <button
                  type="button"
                  aria-current={isActive ? "page" : undefined}
                  className={
                    `inline-flex items-center rounded-xl px-[10px] py-[14px] font-dm-sans font-medium transition-colors ` +
                    (isActive
                      ? "bg-[#EDECFC] text-primary"
                      : "text-[#4D4D4D] hover:bg-[#EDECFC]/60 hover:text-primary/90")
                  }
                  onClick={() => setActiveId(link.id)}>
                  {link.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-row gap-3 md:gap-4 items-center justify-center">
        <Button variant={"round"} className="text-primary font-dm-sans h-10">
          Login
        </Button>
        <Button variant={"primary"} className="font-dm-sans">
          Sign Up
        </Button>
      </div>
    </header>
  );
};
export default Header;
