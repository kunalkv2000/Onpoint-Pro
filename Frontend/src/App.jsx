import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import DashboardLayout from './layouts/DashboardLayout'
import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Login from './pages/Login'

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? children : <Navigate to="/" replace />
}

function PublicRoute({ children }) {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? <Navigate to="/home" replace /> : children
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
            <Route
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<ComingSoon />} />
                <Route path="/employees" element={<ComingSoon />} />
                <Route path="/departments" element={<ComingSoon />} />
                <Route path="/attendance" element={<ComingSoon />} />
                <Route path="/leave" element={<ComingSoon />} />
                <Route path="/payroll" element={<ComingSoon />} />
                <Route path="/analytics" element={<ComingSoon />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <AuthProvider>
                    <SidebarProvider>
                        <AppRoutes />
                    </SidebarProvider>
                </AuthProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
