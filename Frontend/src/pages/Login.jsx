import { useState } from 'react'
import { Mail, Lock, Shield, ArrowRight, Eye, EyeOff } from 'lucide-react'
import Input from '../components/micro/Input'
import Button from '../components/micro/Button'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            login('kunal@company.com', 'password')
            navigate('/home')
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Panel – Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[url(https://img.freepik.com/free-photo/astronaut-diving-digital-art_23-2151198176.jpg?t=st=1772625872~exp=1772629472~hmac=85d6de91474a481683f79f0a485f5c09bb6a8c9873e2e70e6166a80a66654df9&w=1480)] bg-cover bg-center bg-no-repeat overflow-hidden">

                <div className="absolute inset-0 bg-black/60" />

                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                </div>

                <div className="relative z-10 flex flex-col justify-between p-12 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow shrink-0">
                            <img src={logo} alt="Logo" />
                        </div>
                        <span className="text-xl font-bold">Onpoint Pro</span>
                    </div>

                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold leading-tight mb-6">
                            Modern HR Management for Growing Businesses
                        </h1>
                        <p className="text-brand-200 text-lg leading-relaxed">
                            Manage your workforce with a single powerful platform. Automate attendance,
                            streamline payroll, track employee performance, and gain real-time insights
                            to make smarter HR decisions.
                        </p>
                        <div className="flex items-center gap-8 mt-10 text-sm text-brand-200">
                            <div>
                                <p className="text-3xl font-bold text-white">250+</p>
                                <p>Companies</p>
                            </div>

                            <div className="w-px h-12 bg-brand-400/30" />

                            <div>
                                <p className="text-3xl font-bold text-white">12K+</p>
                                <p>Employees</p>
                            </div>

                            <div className="w-px h-12 bg-brand-400/30" />

                            <div>
                                <p className="text-3xl font-bold text-white">99.9%</p>
                                <p>Uptime</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-white text-sm">
                        © 2026 Onpoint Pro. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Right Panel – Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 bg-surface-50 dark:bg-surface-950">
                <div className="w-full max-w-md animate-fade-in">
                    {/* Mobile Logo */}
                    <div className="flex items-center gap-3 mb-10 lg:hidden">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
                            <img src={logo} alt="Logo" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                            Onpoint Pro
                        </span>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-surface-900 dark:text-surface-50">
                            Welcome back
                        </h2>
                        <p className="text-surface-500 mt-2">
                            Sign in to access your HR dashboard.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <Input
                            label="Work Email"
                            type="email"
                            placeholder="you@company.com"
                            icon={Mail}
                            defaultValue="kunal@example.com"
                        />

                        <div className="relative">
                            <Input
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                icon={Lock}
                                defaultValue="password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[38px] text-surface-400 hover:text-surface-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-surface-300 text-brand-600 focus:ring-brand-500" />
                                <span className="text-surface-600 dark:text-surface-400">Remember me</span>
                            </label>
                            <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <Button className="w-full" loading={loading}>
                            Sign in
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700" />
                        <span className="text-xs text-surface-400 font-medium uppercase tracking-wider">or continue with</span>
                        <div className="flex-1 h-px bg-surface-200 dark:bg-surface-700" />
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            className="flex-1 flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 text-sm font-medium transition-all duration-200 hover:shadow-md hover:border-surface-300 dark:hover:border-surface-600"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>

                        <button
                            type="button"
                            className="flex-1 flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 hover:bg-surface-50 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 text-sm font-medium transition-all duration-200 hover:shadow-md hover:border-surface-300 dark:hover:border-surface-600"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 23 23">
                                <path fill="#f35325" d="M1 1h10v10H1z" />
                                <path fill="#81bc06" d="M12 1h10v10H12z" />
                                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                                <path fill="#ffba08" d="M12 12h10v10H12z" />
                            </svg>
                            Microsoft
                        </button>
                    </div>

                    <p className="text-center text-sm text-surface-500 mt-6">
                        Need access?{' '}
                        <a href="#" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">
                            Contact your HR admin
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
