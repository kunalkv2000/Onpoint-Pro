import { Outlet } from 'react-router-dom'
import Sidebar from '../components/macro/Sidebar'
import Header from '../components/macro/Header'
import { useSidebar } from '../context/SidebarContext'

export default function DashboardLayout() {
    const { isCollapsed } = useSidebar()

    return (
        <div className="min-h-screen bg-surface-50 dark:bg-surface-950">
            <Sidebar />
            <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-[72px]' : 'lg:ml-64'}`}>
                <Header />
                <main className="p-4 lg:p-6 max-w-[1600px] mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
