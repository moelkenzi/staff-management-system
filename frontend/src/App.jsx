import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHomePage from "./pages/dashboard/DashboardHomePage";
import Employees from "./pages/dashboard/employees";
import Department from "./pages/dashboard/departmet";
import Attendence from "./pages/dashboard/attendence";
import Payroll from "./pages/dashboard/payroll";
import Tasks from "./pages/dashboard/tasks";
import Leaves from "./pages/dashboard/leaves";
import Holidays from "./pages/dashboard/holidays";
import Settings from "./pages/dashboard/settings";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHomePage />} />
          <Route path="employees" element={<Employees />} />
          <Route path="departments" element={<Department />} />
          <Route path="attendence" element={<Attendence />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="holidays" element={<Holidays />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
