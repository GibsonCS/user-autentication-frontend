import { useForm } from "react-hook-form";
import { UserForm } from "../../types/UserForm";
import { userRegister } from "../../util/userRegister";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>();
  const [user, setUser] = useState<any>(null);
  const [errorRegister, setErrorRegister] = useState<any>(null);

  const handleUserRegister = async (userData: UserForm) => {
    try {
      const response = await userRegister(userData);
      const data = await response.json();
      if (response.status === 201) {
        setUser(data);
        setErrorRegister(null);
      } else {
        setErrorRegister(data);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center h-svh">
      {errorRegister && <span>{errorRegister.message}</span>}
      {!user && (
        <>
          <span className="text-3xl font-semibold pt-12">Adicionar novo usuário</span>
          <form
            onSubmit={handleSubmit(handleUserRegister)}
            className="flex p-20 flex-col items-center gap-2"
          >
            <label htmlFor="username">Usuário</label>
            <input
              {...register("username")}
              className="rounded-md p-1 text-sky-800"
              type="text"
              id="usenameId"
            />
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className="rounded-md p-1 text-sky-800"
              type="text"
              id="emailId"
            />
            <label htmlFor="password">Senha</label>
            <input
              {...register("password")}
              className="rounded-md p-1 text-sky-800"
              type="password"
              id="passwordId"
            />
            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <input
              {...register("confirmPassword", {
                required: "Este campo é obrigatório",
              })}
              className="rounded-md p-1 mb-1 text-sky-800"
              type="password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword.message}</span>
            )}
            <div className=" flex w-full justify-between">
              <button className="border border-red-700 font-semibold hover:shadow-md hover:shadow-sky-300/100 transition-all duration-500 p-1 rounded-md bg-gradient-to-bl from-red-950 to-red-600">
                Limpar
              </button>
              <button className="border border-slate-700 font-semibold hover:shadow-md hover:shadow-sky-300/100 transition-all duration-500 p-1 rounded-md bg-gradient-to-bl from-slate-950 to-slate-600">
                Adicionar
              </button>
            </div>
          </form>
        </>
      )}
      {user && (
        <div className="flex flex-col items-center gap-2 h-screen justify-center">
          <span className="font-normal p-8 text-2xl">{user.message}</span>
          <Link to={"/users"}>
            <button className="border border-md p-1 rounded-md">Voltar</button>
          </Link>
        </div>
      )}
    </div>
  );
};
