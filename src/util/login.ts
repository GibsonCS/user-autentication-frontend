import { User } from "../interfaces/User";

export const auth = async (username: string, password: string) => {
  const credentials: User = {
    username: username,
    password: password,
  };

  return await fetch(`${import.meta.env.VITE_URL_API}/users/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });
};
