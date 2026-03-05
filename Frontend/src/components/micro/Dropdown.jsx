import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Dropdown({ trigger, items = [], align = 'right' }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    return (
        <div className="relative" ref={ref}>
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
                {trigger || (
                    <button className="btn-ghost inline-flex items-center gap-1 text-sm">
                        Menu <ChevronDown className="w-4 h-4" />
                    </button>
                )}
            </div>
            {open && (
                <div
                    className={`
            absolute z-50 mt-2 w-56 rounded-xl bg-white dark:bg-surface-800
            border border-surface-200 dark:border-surface-700 shadow-lg
            animate-scale-in origin-top-right py-1
            ${align === 'right' ? 'right-0' : 'left-0'}
          `}
                >
                    {items.map((item, i) =>
                        item.divider ? (
                            <hr key={i} className="my-1 border-surface-200 dark:border-surface-700" />
                        ) : (
                            <button
                                key={i}
                                onClick={() => {
                                    item.onClick?.()
                                    setOpen(false)
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-700/50 transition-colors"
                            >
                                {item.icon && <item.icon className="w-4 h-4 text-surface-400" />}
                                {item.label}
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    )
}
