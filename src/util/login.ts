import { useNavigate } from "react-router-dom"


export const login = async (login: string, password: string) => {


    const credentials = {
        login,
        password
    }

    const response = await fetch(`${import.meta.env.VITE_URL_API}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(credentials)
    })
    const data = await response.json()

}