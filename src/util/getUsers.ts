export const getUsers = async () => {
  return await fetch(`${import.meta.env.VITE_URL_API}/users`, {
    method: "GET",
    credentials: "include",
  });
};
