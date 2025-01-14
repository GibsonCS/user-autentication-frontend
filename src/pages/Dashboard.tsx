import { useAuth } from "../context/AuthContext"

export const Dashboard = () => {
    const { user } = useAuth()

    return (
        <>
            <section>
                <span className="text-xl">Bem vindo(a), {user} </span>
            </section>
        </>
    )
}