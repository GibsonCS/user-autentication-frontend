import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { checkAuth } from "../../util/checkAuth";

//receives and destructures an object with the requiredRoles property of the array string type
export const ProtectedRoute = ({ requiredRoles }: { requiredRoles?: string[] }) => {
  const [hasRole, setHasRole] = useState<boolean | null>(null);

  useEffect(() => {
    const handleCheckAuth = async () => {
      const response = await checkAuth();
      const data = await response.json();
      const existRole = requiredRoles?.includes(data.role);
      existRole ? setHasRole(true) : setHasRole(false);
    };
    handleCheckAuth();
  }, []);

  if (hasRole === null) {
    return <Loading />;
  }
  return hasRole ? <Outlet /> : <Navigate to={"/"} state={"Voce não tem permissao"} />;
};
