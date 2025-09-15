import * as React from "react"
import {
  IconBriefcaseOff,
  IconCamera,
  IconChartBar,
  IconDatabase,
  IconDoorExit,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconLayoutDashboardFilled,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavDocuments } from "./nav-documents"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,

} from "../ui/sidebar"
import { Logo, LogoMark } from "../global/icons"
import { Data } from "../../constants/data"
import { TeamSwitcher } from "./team-switcher"
import { CalendarCheck, DollarSign, FileCheck, LayoutDashboard, ListCheck } from "lucide-react"
import { RiP2pLine, RiTeamLine } from "@remixicon/react"
import { NavUser } from "./nav-user"

const data = {
  user: {
    name: "Alex",
    email: "m@example.com",
    avatar: "/images/avatar.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconLayoutDashboardFilled,
    },
    {
      title: "All Employees",
      url: "/dashboard/employees",
      icon: RiTeamLine,
    },
    {
      title: "All Departments",
      url: "/dashboard/departments",
      icon: RiP2pLine,
    },
    {
      title: "Attendencee",
      url: "/dashboard/attendence",
      // icon: CalendarCheck,
      icon: FileCheck,
    },
    {
      title: "Payroll",
      url: "/dashboard/payroll",
      icon: DollarSign,
    },
    {
      title: "Tasks",
      url: "/dashboard/tasks",
      icon: ListCheck,
    },
    {
      title: "Leaves",
      url: "/dashboard/leaves",
      icon: IconDoorExit,
    },
    {
      title: "Holidays",
      url: "/dashboard/holidays",
      icon: IconBriefcaseOff,
    },

  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: IconSearch,
    // },
  ],
  // documents: [
  //   {
  //     name: "Data Library",
  //     url: "#",
  //     icon: IconDatabase,
  //   },
  //   {
  //     name: "Reports",
  //     url: "#",
  //     icon: IconReport,
  //   },
  //   {
  //     name: "Word Assistant",
  //     url: "#",
  //     icon: IconFileWord,
  //   },
  // ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#" >
                <LogoMark className="!size-5 rounded-full" />
                <span className="text-base font-semibold">Staffly</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
        <TeamSwitcher teams={Data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

