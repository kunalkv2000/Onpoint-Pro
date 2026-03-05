import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('admin-theme')
        return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    })
    const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement)

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('admin-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    // Sync fullscreen state when it changes (e.g. user presses Escape)
    useEffect(() => {
        const onFullscreenChange = () => {
            const fs = !!document.fullscreenElement
            setIsFullscreen(fs)
            localStorage.setItem('app-fullscreen', fs ? 'true' : 'false')
        }
        document.addEventListener('fullscreenchange', onFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
    }, [])

    // Re-enter fullscreen on mount if it was previously active
    useEffect(() => {
        if (localStorage.getItem('app-fullscreen') === 'true' && !document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => { })
        }
    }, [])

    const toggleTheme = () => setIsDark(prev => !prev)

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => { })
        } else {
            document.exitFullscreen().catch(() => { })
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, isFullscreen, toggleFullscreen }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within ThemeProvider')
    return context
}
