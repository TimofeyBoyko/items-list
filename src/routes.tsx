import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CardInfo from "./pages/CardInfo";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/card/:id" element={<CardInfo />} />

      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default useRoutes;
