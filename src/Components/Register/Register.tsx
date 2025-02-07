import { useForm } from 'react-hook-form'
import { UserForm } from '../../types/UserForm'

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserForm>()

    const handleUserRegister = (userData: UserForm) => {
        console.log(userData)
    }

    return (
        <div className="flex flex-col items-center h-svh">
            <span className="text-3xl font-semibold pt-12">Adicionar novo usuário</span>
            <form onSubmit={handleSubmit(handleUserRegister)} className="flex p-20 flex-col items-center gap-2">
                <label htmlFor="username">Usuário</label>
                <input {...register('username')} className="rounded-md p-1 text-sky-800" type="text" id="usenameId" />
                <label htmlFor="email">Email</label>
                <input {...register('email')} className="rounded-md p-1 text-sky-800" type="text" id="emailId" />
                <label htmlFor="password">Senha</label>
                <input {...register('password')} className="rounded-md p-1 text-sky-800" type="password" id="passwordId" />
                <label htmlFor="passwordConfirm">Confirmar senha</label>
                <input {...register('confirmPassword', { required: 'Este campo é obrigatório' })} className="rounded-md p-1 mb-1 text-sky-800" type="password" />
                {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                <div className=" flex w-full justify-between">
                    <button className="border border-red-700 font-semibold hover:shadow-md hover:shadow-sky-300/100 transition-all duration-500 p-1 rounded-md bg-gradient-to-bl from-red-950 to-red-600">Limpar</button>
                    <button className="border border-slate-700 font-semibold hover:shadow-md hover:shadow-sky-300/100 transition-all duration-500 p-1 rounded-md bg-gradient-to-bl from-slate-950 to-slate-600">Adicionar</button>
                </div>
            </form>
        </div>
    )
}