import { UserForm } from "../types/UserForm";

export const userRegister = async (userData: UserForm) => {
  const requestConfig = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userData),
  };
  return await fetch(`${import.meta.env.VITE_URL_API}/user`, requestConfig);
};
