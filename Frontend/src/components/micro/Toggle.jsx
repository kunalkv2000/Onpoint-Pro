export default function Toggle({ enabled, onChange, label, description }) {
    return (
        <div className="flex items-center justify-between">
            <div>
                {label && (
                    <p className="text-sm font-medium text-surface-900 dark:text-surface-100">{label}</p>
                )}
                {description && (
                    <p className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">{description}</p>
                )}
            </div>
            <button
                type="button"
                role="switch"
                aria-checked={enabled}
                onClick={() => onChange?.(!enabled)}
                className={`
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2
          focus:ring-brand-500/30 focus:ring-offset-2 dark:focus:ring-offset-surface-800
          ${enabled ? 'bg-brand-600' : 'bg-surface-300 dark:bg-surface-600'}
        `}
            >
                <span
                    className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full
            bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out mt-0.5
            ${enabled ? 'translate-x-5 ml-0.5' : 'translate-x-0 ml-0.5'}
          `}
                />
            </button>
        </div>
    )
}
