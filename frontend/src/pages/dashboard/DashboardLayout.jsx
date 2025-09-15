import { Outlet } from "react-router-dom";
import { AppSidebar } from "../../components/layout/Sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col w-full">
          <header className="flex flex-row items-center px-2 pt-4">
            <SidebarTrigger />
          </header>
          <main className="@container/main flex flex-1 flex-col w-full">
            <Outlet />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}