import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";
import LoginPage from "../../Pages/Login/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}
export default AppRoutes;
