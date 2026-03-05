const colorMap = {
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    default: 'bg-surface-100 text-surface-600 dark:bg-surface-700 dark:text-surface-300',
    brand: 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400',
    floater: 'bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-400',
}

export default function Badge({ children, color = 'default', dot = false, className = '' }) {
    return (
        <span
            className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium
        ${colorMap[color]} ${className}
      `}
        >
            {dot && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            )}
            {children}
        </span>
    )
}
