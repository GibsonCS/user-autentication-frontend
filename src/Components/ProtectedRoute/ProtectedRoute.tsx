import { useEffect, useState } from "react"
import { checkAuth } from "../util/checkAuth"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

//receives and destructures an object with the requiredRoles property of the array string type
export const ProtectedRoute = ({ requiredRoles }: { requiredRoles?: string[] }) => {
    const [hasRole, setHasRole] = useState<boolean | null>(null)
    const navigate = useNavigate()

    const { login } = useAuth()

    useEffect(() => {
        const handleAuth = async () => {
            const response = await checkAuth()
            const data = await response.json()
            console.log(data)
            if (response.status === 200) {
                login(data.username)
            } else {
                return navigate("/login", { state: 'Você não está autenticado' })
            }
            console.log(data)
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            requiredRoles?.some(role => data.roles[0].includes(role)) ? setHasRole(true) : setHasRole(false)
        }
        handleAuth()

    }, [requiredRoles])


    if (hasRole === null) {
        return <div className="text-red-500">Carregando ....</div>
    }
    return hasRole ? <Outlet /> : <Navigate to={'/login'} state={'Voce não tem permissao'} />
}