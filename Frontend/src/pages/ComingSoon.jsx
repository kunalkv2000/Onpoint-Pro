import { Clock, Rocket, Bell } from 'lucide-react'
import { useState } from 'react'

export default function ComingSoon() {
    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="text-center max-w-lg mx-auto px-6 animate-fade-in">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center mb-8">
                    <div className="absolute w-24 h-24 bg-brand-500/10 rounded-full animate-pulse" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
                        <Rocket className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-surface-900 dark:text-surface-50 mb-3">
                    Coming Soon
                </h1>
                <p className="text-surface-500 dark:text-surface-400 text-base leading-relaxed mb-8">
                    We're working hard to bring you something amazing.
                    <br />
                    This feature is currently under development.
                </p>

                {/* Status Pills */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-sm font-medium">
                        <Clock className="w-4 h-4" />
                        In Development
                    </div>
                </div>
            </div>
        </div>
    )
}
