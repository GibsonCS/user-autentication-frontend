export const checkAuth = async () => {
  return await fetch(`${import.meta.env.VITE_URL_API}/auth/check`, {
    credentials: "include",
  });

  // if (response.status === 200) {
  //     return data
  // } else {
  //     throw new Error('Usuário não autenticado.');
  // }
};
