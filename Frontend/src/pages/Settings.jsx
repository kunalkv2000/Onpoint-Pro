import { useState } from 'react'
import { User, Mail, Lock, Bell, Shield, Palette, Building2, Save } from 'lucide-react'
import Card from '../components/micro/Card'
import Input from '../components/micro/Input'
import Button from '../components/micro/Button'
import Toggle from '../components/micro/Toggle'
import Avatar from '../components/micro/Avatar'
import Badge from '../components/micro/Badge'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'company', label: 'Company', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
]

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile')
    const { isDark, toggleTheme } = useTheme()
    const { user } = useAuth()

    const [notifications, setNotifications] = useState({
        leaveRequests: true,
        attendance: true,
        payroll: true,
        announcements: false,
        security: true,
    })

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-surface-900 dark:text-surface-50">Settings</h1>
                <p className="text-sm text-surface-500 mt-1">Manage your account and HRMS configuration.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar Tabs */}
                <div className="glass-card p-2 h-fit">
                    <nav className="space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${activeTab === tab.id
                                        ? 'bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300'
                                        : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800'
                                    }
                `}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 space-y-6">
                    {activeTab === 'profile' && (
                        <Card title="Profile Information">
                            <div className="space-y-6">
                                <div className="flex items-center gap-5">
                                    <Avatar name={user?.name || 'User'} size="xl" />
                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold text-surface-900 dark:text-surface-100">{user?.name}</p>
                                        <p className="text-xs text-surface-500">{user?.department} · {user?.role}</p>
                                        <div className="flex gap-2">
                                            <Button size="sm" variant="secondary">Upload Photo</Button>
                                            <Button size="sm" variant="ghost">Remove</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Full Name" defaultValue="Kunal" icon={User} />
                                    <Input label="Employee ID" defaultValue="EMP001" disabled />
                                    <Input label="Work Email" type="email" defaultValue="kunal@company.com" icon={Mail} />
                                    <Input label="Role" defaultValue="HR Manager" disabled />
                                    <Input label="Department" defaultValue="Human Resources" disabled />
                                    <Input label="Date of Joining" defaultValue="Jan 15, 2022" disabled />
                                </div>
                                <div className="flex justify-end gap-3 pt-4 border-t border-surface-200 dark:border-surface-700">
                                    <Button variant="ghost">Cancel</Button>
                                    <Button icon={Save}>Save Changes</Button>
                                </div>
                            </div>
                        </Card>
                    )}

                    {activeTab === 'company' && (
                        <Card title="Company Information">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Company Name" defaultValue="TechCorp India Pvt. Ltd." icon={Building2} />
                                    <Input label="Industry" defaultValue="Information Technology" />
                                    <Input label="Company Size" defaultValue="1,000 – 5,000 employees" disabled />
                                    <Input label="Founded" defaultValue="2015" disabled />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">Address</label>
                                    <textarea
                                        rows={2}
                                        defaultValue="Sector 62, Noida, Uttar Pradesh, India – 201301"
                                        className="input-field resize-none"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="glass-card p-4 text-center">
                                        <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">7</p>
                                        <p className="text-xs text-surface-500">Departments</p>
                                    </div>
                                    <div className="glass-card p-4 text-center">
                                        <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1,248</p>
                                        <p className="text-xs text-surface-500">Employees</p>
                                    </div>
                                    <div className="glass-card p-4 text-center">
                                        <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">3</p>
                                        <p className="text-xs text-surface-500">Offices</p>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3 pt-4 border-t border-surface-200 dark:border-surface-700">
                                    <Button variant="ghost">Cancel</Button>
                                    <Button icon={Save}>Update Company Info</Button>
                                </div>
                            </div>
                        </Card>
                    )}

                    {activeTab === 'notifications' && (
                        <Card title="Notification Preferences">
                            <div className="space-y-6">
                                <Toggle
                                    enabled={notifications.leaveRequests}
                                    onChange={(v) => setNotifications({ ...notifications, leaveRequests: v })}
                                    label="Leave Requests"
                                    description="Get notified when employees apply for leave"
                                />
                                <Toggle
                                    enabled={notifications.attendance}
                                    onChange={(v) => setNotifications({ ...notifications, attendance: v })}
                                    label="Attendance Alerts"
                                    description="Daily notification for absent or late employees"
                                />
                                <Toggle
                                    enabled={notifications.payroll}
                                    onChange={(v) => setNotifications({ ...notifications, payroll: v })}
                                    label="Payroll Updates"
                                    description="Notification when payroll is processed or has issues"
                                />
                                <Toggle
                                    enabled={notifications.announcements}
                                    onChange={(v) => setNotifications({ ...notifications, announcements: v })}
                                    label="Company Announcements"
                                    description="Organization-wide announcements and updates"
                                />
                                <Toggle
                                    enabled={notifications.security}
                                    onChange={(v) => setNotifications({ ...notifications, security: v })}
                                    label="Security Alerts"
                                    description="Unauthorized access attempts and security events"
                                />
                                <div className="flex justify-end pt-4 border-t border-surface-200 dark:border-surface-700">
                                    <Button icon={Save}>Save Preferences</Button>
                                </div>
                            </div>
                        </Card>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6">
                            <Card title="Change Password">
                                <div className="space-y-4 max-w-md">
                                    <Input label="Current Password" type="password" placeholder="••••••••" icon={Lock} />
                                    <Input label="New Password" type="password" placeholder="••••••••" icon={Lock} />
                                    <Input label="Confirm Password" type="password" placeholder="••••••••" icon={Lock} />
                                    <div className="flex justify-end pt-4 border-t border-surface-200 dark:border-surface-700">
                                        <Button icon={Save}>Update Password</Button>
                                    </div>
                                </div>
                            </Card>
                            <Card title="Two-Factor Authentication">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-surface-900 dark:text-surface-100">
                                            2FA Status: <Badge color="error">Disabled</Badge>
                                        </p>
                                        <p className="text-xs text-surface-500 mt-1">Protect your HR data with an extra layer of security.</p>
                                    </div>
                                    <Button variant="outline" size="sm">Enable 2FA</Button>
                                </div>
                            </Card>
                        </div>
                    )}

                    {activeTab === 'appearance' && (
                        <Card title="Appearance Settings">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-medium text-surface-900 dark:text-surface-100 mb-3">Theme</p>
                                    <div className="grid grid-cols-2 gap-4 max-w-sm">
                                        <button
                                            onClick={() => isDark && toggleTheme()}
                                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${!isDark ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30' : 'border-surface-200 dark:border-surface-700 hover:border-surface-300'}`}
                                        >
                                            <div className="w-full h-20 rounded-lg bg-white border border-surface-200 mb-3 flex items-center justify-center">
                                                <div className="w-8 h-2 bg-surface-300 rounded" />
                                            </div>
                                            <p className="text-sm font-medium text-surface-900 dark:text-surface-100">Light</p>
                                        </button>
                                        <button
                                            onClick={() => !isDark && toggleTheme()}
                                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${isDark ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/30' : 'border-surface-200 dark:border-surface-700 hover:border-surface-300'}`}
                                        >
                                            <div className="w-full h-20 rounded-lg bg-surface-800 border border-surface-700 mb-3 flex items-center justify-center">
                                                <div className="w-8 h-2 bg-surface-600 rounded" />
                                            </div>
                                            <p className="text-sm font-medium text-surface-900 dark:text-surface-100">Dark</p>
                                        </button>
                                    </div>
                                </div>
                                <Toggle enabled={isDark} onChange={toggleTheme} label="Dark Mode" description="Switch between light and dark mode" />
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}
