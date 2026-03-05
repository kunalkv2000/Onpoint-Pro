import { NavLink, useLocation } from 'react-router-dom'
import {
    LayoutDashboard, Users, BarChart3, Settings, LogOut, X, Shield, CalendarDays, Wallet, ClipboardList, Building2, Home,
    HelpCircle
} from 'lucide-react'
import { useSidebar } from '../../context/SidebarContext'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../micro/Avatar'
import Tooltip from '../micro/Tooltip'
import logo from '../../assets/logo.png'

const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/employees', icon: Users, label: 'Employees' },
    { path: '/departments', icon: Building2, label: 'Departments' },
    { path: '/attendance', icon: CalendarDays, label: 'Attendance' },
    { path: '/leave', icon: ClipboardList, label: 'Leave Management' },
    { path: '/payroll', icon: Wallet, label: 'Payroll' },
    { path: '/analytics', icon: BarChart3, label: 'HR Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
    const { isCollapsed, isMobileOpen, toggleCollapse, closeMobile } = useSidebar()
    const { user, logout } = useAuth()
    const location = useLocation()

    const sidebarContent = (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className={`flex items-center gap-3 px-4 h-16 border-b border-surface-200/60 dark:border-surface-700/40 shrink-0 ${isCollapsed ? 'justify-center' : ''}`}>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow shrink-0">
                    <img src={logo} alt="Logo" />
                </div>
                {!isCollapsed && (
                    <span className="text-lg font-bold text-brand-700 dark:text-white dark:font-medium">
                        Onpoint Pro
                    </span>
                )}
            </div>

            {/* Nav Links */}
            <nav className={`flex-1 px-3 py-4 space-y-1 ${isCollapsed ? 'overflow-visible' : 'overflow-y-auto'}`}>
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path
                    const linkContent = (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={closeMobile}
                            className={`
                                flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                                transition-all duration-200 group
                                ${isActive
                                    ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 shadow-sm'
                                    : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100'
                                }
                                ${isCollapsed ? 'justify-center' : ''}
                            `}
                        >
                            <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-surface-400 group-hover:text-surface-600 dark:group-hover:text-surface-300'}`} />
                            {!isCollapsed && <span>{item.label}</span>}
                            {isActive && !isCollapsed && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-500" />
                            )}
                        </NavLink>
                    )

                    return isCollapsed ? (
                        <Tooltip key={item.path} content={item.label} position="right">
                            {linkContent}
                        </Tooltip>
                    ) : (
                        <div key={item.path}>{linkContent}</div>
                    )
                })}
            </nav>

            {/* Logout */}
            <div className={`px-3 py-4 shrink-0 ${isCollapsed ? 'flex flex-col items-center gap-2' : ''}`}>

                {!isCollapsed ? (

                    <div
                        onClick={logout}
                        className="flex cursor-pointer rounded-xl items-center gap-3 px-3 py-2 text-black dark:text-white hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white"
                    >
                        <LogOut className="w-4 h-4" />

                        <div className="flex-1 min-w-0">
                            <p>Logout</p>
                        </div>
                    </div>

                ) : (

                    <Tooltip content="Logout" position="right">
                        <button
                            onClick={logout}
                            className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-700 text-surface-400 hover:text-red-500 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </Tooltip>

                )}

            </div>
        </div>
    )

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={`
                    hidden lg:flex flex-col fixed left-0 top-0 h-screen z-30
                    bg-white/90 dark:bg-surface-900/95 backdrop-blur-xl
                    border-r border-surface-200/60 dark:border-surface-700/40
                    transition-all duration-300 ease-in-out
                    ${isCollapsed ? 'w-[72px] overflow-visible' : 'w-64'}
                    `}
            >
                {sidebarContent}
            </aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobile} />
                    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-surface-900 shadow-2xl z-50 animate-slide-in">
                        <button
                            onClick={closeMobile}
                            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-400"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        {sidebarContent}
                    </aside>
                </div>
            )}
        </>
    )
}
