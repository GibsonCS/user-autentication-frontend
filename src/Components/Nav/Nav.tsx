import { Link } from "react-router-dom";

export const Nav = () => {
  const items = [
    <Link className="hover:text-sky-200 hover:scale-105 transition" to={"/users"}>
      Listar usuários
    </Link>,
    <Link className="hover:text-sky-200 hover:scale-105 transition" to={"/register"}>
      Cadastrar Usuário
    </Link>,
  ];

  return <nav className="flex w-max gap-6 justify-center text-xl">{items}</nav>;
};
