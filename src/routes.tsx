import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './components/Login/Login'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export const AppRoute = () => {
    return (
        <Router>
            <Routes >
                <Route path='/' element={<Login />} />
                <Route element={<ProtectedRoute requiredRoles={["user"]} />}>
                    <Route element={<Layout />}>
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

