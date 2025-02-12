export const checkAuth = async () => {
  try {
    return await fetch(`${import.meta.env.VITE_URL_API}/auth`, {
      method: "GET",
      credentials: "include",
    });
  } catch (error) {
    console.error(error);
    throw new Error("Error to check auth");
  }
};
