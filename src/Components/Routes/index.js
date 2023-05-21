import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";
import LoginPage from "../../Pages/Login/Login";
import SignupPage from "../../Pages/Signup/Signup";
import Product from "../Products/product";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}
export default AppRoutes;
