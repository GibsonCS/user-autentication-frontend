import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Index } from './pages/Index'

export const AppRoute = () => {
    return (
        <Router>
            <Routes >
                <Route element={<Layout />}>
                    <Route path='/' element={<Index />} />
                </Route>
            </Routes>
        </Router>
    )
}

