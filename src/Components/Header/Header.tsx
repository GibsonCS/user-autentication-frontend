import { Nav } from "../Nav"
import { Link } from "react-router-dom"
import userLogo from './assets/user.png'

export const Header = () => {
    return (
        <header className="flex justify-between bg-gradient-to-bl items-center from-gray-950 to-gray-700 p-6">
            <img className="flex w-11" src={userLogo} alt="User logo" />
            <Nav />
            <div className="border border-gray-800 bg-gradient-to-bl transition from-gray-900 to-gray-500 p-2 rounded-md hover:shadow-md hover:shadow-sky-300/100">
                <Link to={'/logout'}>Sair</Link>
            </div>
        </header>
    )
}