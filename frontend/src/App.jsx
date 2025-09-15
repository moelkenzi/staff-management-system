import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { NavBar } from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
