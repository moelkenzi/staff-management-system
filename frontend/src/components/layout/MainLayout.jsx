import { Outlet } from "react-router-dom";
import { NavBar } from "../sections/Navbar";
import Footer from "../sections/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
