import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./Components/Login/Login";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { Register } from "./Components/Register/Register";
import { Users } from "./pages/Users/Users";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute requiredRoles={["user"]} />}>
          <Route element={<Layout />}>
            <Route path="/register" element={<Register />} />s
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
