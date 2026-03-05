const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
}

const colorMap = [
    'bg-brand-500',
    'bg-emerald-500',
    'bg-amber-500',
    'bg-rose-500',
    'bg-cyan-500',
    'bg-violet-500',
]

function getInitials(name) {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}

function getColor(name) {
    let hash = 0
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colorMap[Math.abs(hash) % colorMap.length]
}

export default function Avatar({ name = '', src, size = 'md', status, className = '' }) {
    const statusColors = {
        online: 'bg-emerald-500',
        offline: 'bg-surface-400',
        busy: 'bg-red-500',
    }

    return (
        <div className={`relative inline-flex shrink-0 ${className}`}>
            {src ? (
                <img
                    src={src}
                    alt={name}
                    className={`${sizeMap[size]} rounded-full object-cover ring-2 ring-white dark:ring-surface-800`}
                />
            ) : (
                <div
                    className={`
            ${sizeMap[size]} ${getColor(name)}
            rounded-full flex items-center justify-center text-white font-semibold
            ring-2 ring-white dark:ring-surface-800
          `}
                >
                    {getInitials(name || '?')}
                </div>
            )}
            {status && (
                <span
                    className={`
            absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-surface-800
            ${statusColors[status]}
          `}
                />
            )}
        </div>
    )
}
