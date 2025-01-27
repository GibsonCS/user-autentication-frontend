import { useEffect, useState } from "react"
import { checkAuth } from "../../util/checkAuth"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Loading } from "../Loading/Loading"

//receives and destructures an object with the requiredRoles property of the array string type
export const ProtectedRoute = ({ requiredRoles }: { requiredRoles?: string[] }) => {
    const [hasRole, setHasRole] = useState<boolean | null>(null)
    const navigate = useNavigate()
    const { login } = useAuth()

    useEffect(() => {
        const handleAuth = async () => {
            const response = await checkAuth()
            const data = await response.json()
            if (response.status === 200) {
                login(data.username)
            } else {
                return navigate("/", { state: 'Você não está autenticado' })
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            requiredRoles?.some(role => data.roles[0].includes(role)) ? setHasRole(true) : setHasRole(false)
        }
        handleAuth()
    }, [login, navigate, requiredRoles])

    if (hasRole === null) {
        return <Loading />
    }
    return hasRole ? <Outlet /> : <Navigate to={'/'} state={'Voce não tem permissao'} />
}