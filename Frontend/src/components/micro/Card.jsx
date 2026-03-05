export default function Card({ children, title, action, padding = true, className = '' }) {
    return (
        <div className={`glass-card overflow-hidden animate-fade-in ${className}`}>
            {(title || action) && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-surface-200/60 dark:border-surface-700/60">
                    {title && (
                        <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                            {title}
                        </h3>
                    )}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className={padding ? 'p-6' : ''}>
                {children}
            </div>
        </div>
    )
}
