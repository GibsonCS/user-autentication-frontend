import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Index } from './pages/Index'
import { Login } from './components/Login/Login'

export const AppRoute = () => {
    return (
        <Router>
            <Routes >
                <Route path='/login' element={<Login />} />
                <Route element={<Layout />}>
                    <Route path='/' element={<Index />} />
                </Route>
            </Routes>
        </Router>
    )
}

