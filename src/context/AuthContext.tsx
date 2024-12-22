import { createContext, useState, useContext } from 'react'


const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (userData: any) => {
        setUser(userData)
    }
}