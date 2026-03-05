import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const mockUser = {
    name: 'Kunal',
    email: 'kunal@company.com',
    role: 'HR Manager',
    department: 'Human Resources',
    avatar: null,
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (email, password) => {
        setUser(mockUser)
        setIsAuthenticated(true)
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}
