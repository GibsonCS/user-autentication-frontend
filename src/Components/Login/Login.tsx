/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form'
import { doLogin } from '../../util/login'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const authMessage = location.state

    type FormInputs = {
        username: string,
        password: string
    }

    const makeLogin = async (data: FormInputs) => {
        const { username, password } = data
        try {
            const response = await doLogin(username, password)
            if (response) {
                login(response)
                navigate('/dashboard')
            }
        } catch (err: any) {
            setLoginError(err.message)
            console.error(loginError)
            throw new Error(err)
        }
    }

    const { register, formState: { errors }, handleSubmit } = useForm<FormInputs>()

    return (
        <div className="bg-sky-950 flex flex-col justify-center items-center h-svh">
            <div className="items-center gap-2 p-4 border-gray-400 w-1/4 flex flex-col" >
                <form className="flex flex-col items-center gap-2 p-4 w-full" onSubmit={handleSubmit(makeLogin)} >
                    <label className="font-semibold" htmlFor="login">Login</label>
                    <input className="border text-sky-950 border-black rounded-md pl-1 shadow" type="text" {...register('username', { required: 'O login é obrigatório' })} autoFocus />
                    {errors.username && <span className='text-red-400'>{errors.username.message}</span>}
                    <label className="font-semibold" htmlFor="password">Password</label>
                    <input className="border text-sky-950 border-black rounded-md pl-1 shadow" type="text" {...register('password', { required: 'A senha é obrigatória' })} />
                    {errors.password && <span className='text-red-400'>{errors.password?.message}</span>}
                    <button type='submit' className="border border-sky-600 rounded-lg hover:shadow-md hover:shadow-sky-600/100 transition p-2 mt-2 w-1/2 bg-gradient-to-br from-sky-950 to-sky-400 text-white">Entrar</button>
                    <span>{authMessage}</span>

                </form>
            </div>
        </div>
    )
}