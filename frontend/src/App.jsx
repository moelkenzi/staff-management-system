import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/sections/Header";

const App = () => {
  return (
    <>
      <main className="relative w-full min-h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
