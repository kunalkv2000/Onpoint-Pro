import { Search, Bell, Moon, Sun, Menu, ChevronLeft, Minimize, Fullscreen } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useSidebar } from '../../context/SidebarContext'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../micro/Avatar'
import Dropdown from '../micro/Dropdown'
import { User, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const { isDark, toggleTheme, isFullscreen, toggleFullscreen } = useTheme()
    const { isCollapsed, toggleCollapse, toggleMobile } = useSidebar()
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [searchFocused, setSearchFocused] = useState(false)

    const userMenuItems = [
        { label: 'My Profile', icon: User, onClick: () => navigate('/settings') },
        { label: 'Settings', icon: Settings, onClick: () => navigate('/settings') },
        { divider: true },
        { label: 'Sign out', icon: LogOut, onClick: logout },
    ]

    return (
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl border-b border-surface-200/60 dark:border-surface-700/40">
            <div className="flex items-center justify-between h-16 px-4 lg:px-6">
                {/* Left: Sidebar toggle + Mobile menu + Search */}
                <div className="flex items-center gap-3 flex-1">
                    <button
                        onClick={toggleMobile}
                        className="lg:hidden p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Sidebar collapse toggle (desktop) */}
                    <button
                        onClick={toggleCollapse}
                        className="hidden lg:flex p-2 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 transition-colors"
                    >
                        <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`relative hidden sm:block transition-all duration-300 ${searchFocused ? 'w-80' : 'w-64'}`}>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                        <input
                            type="text"
                            placeholder="Search employees, departments..."
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            className="w-full pl-10 pr-4 py-2 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-xl text-sm text-surface-900 dark:text-surface-100 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2">
                    {/* Fullscreen toggle */}
                    <button
                        onClick={toggleFullscreen}
                        className="p-2.5 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-all duration-200 hover:text-brand-600 dark:hover:text-brand-400"
                        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    >
                        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Fullscreen className="w-5 h-5" />}
                    </button>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-all duration-200 hover:text-brand-600 dark:hover:text-brand-400"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    {/* Notifications */}
                    <button className="relative p-2.5 rounded-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-all duration-200 hover:text-brand-600 dark:hover:text-brand-400">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-surface-900 animate-pulse" />
                    </button>

                    {/* Divider */}
                    <div className="w-px h-8 bg-surface-200 dark:bg-surface-700 mx-1" />

                    {/* User Menu */}
                    <Dropdown
                        items={userMenuItems}
                        trigger={
                            <div className="flex items-center gap-3 cursor-pointer p-1.5 rounded-xl hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors">
                                <Avatar name={user?.name || 'User'} size="sm" status="online" />
                                <div className="hidden md:block text-left">
                                    <p className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                                        {user?.name}
                                    </p>
                                    <p className="text-xs text-surface-500">{user?.role}</p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </header>
    )
}
