import { useForm } from 'react-hook-form'

export const Login = () => {
    const { register, formState: { errors } } = useForm<FormInputs>()

    type FormInputs = {
        login: string,
        password: string
    }

    return (
        <div className="bg-sky-950 flex flex-col justify-center items-center h-svh">
            <div className="items-center gap-2 p-4 border-gray-400 w-1/4 flex flex-col">
                <form className="flex flex-col items-center gap-2 p-4 w-full" >
                    <label className="font-semibold" htmlFor="login">Login</label>
                    <input className="border text-sky-950 border-black rounded-md pl-1 shadow" type="text" {...register('login', { required: 'O login é obrigatório' })} autoFocus />
                    {errors.login && <span className='text-red-400'>{errors.login.message}</span>}
                    <label className="font-semibold" htmlFor="password">Password</label>
                    <input className="border text-sky-950 border-black rounded-md pl-1 shadow" type="text" {...register('password', { required: 'A senha é obrigatória' })} />
                    {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}
                    <button className="border border-sky-600 rounded-lg hover:shadow-md hover:shadow-sky-600/100 transition p-2 mt-2 w-1/2 bg-gradient-to-br from-sky-950 to-sky-400 text-white">Entrar</button>
                </form>
            </div>
        </div>
    )
}