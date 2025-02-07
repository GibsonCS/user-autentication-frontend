import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./Components/Login/Login";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { Register } from "./Components/Register/Register";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute requiredRoles={["user"]} />}>
          <Route element={<Layout />}>
            <Route path="/cadastro" element={<Register />} />s
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
