import { Routes, Route } from "react-router-dom";
import HomePage from "./MyComponent/UI/Pages/HomePage";
import SymptomPage from "./MyComponent/UI/Pages/SymptomPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/symptoms" element={<SymptomPage/>} />
    {/* Add more routes here */}
  </Routes>
);

export default AppRoutes;