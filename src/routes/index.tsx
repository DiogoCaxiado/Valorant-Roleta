import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default AppRoutes;
