import { useEffect, useState } from 'react'

export default function Welcome() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const day = time.toLocaleDateString("en-US", { weekday: "long" });

    const date = time.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const clock = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 col-span-3 lg:col-span-1 xl:col-span-1 dark:bg-surface-900">
            <div>
                <p className="text-sm text-black leading-relaxed mt-2 mb-4 dark:text-white">
                    Current Date & Time
                </p>

                <h2 className="text-3xl text-brand-600 font-bold mt-2 dark:text-white">{clock}</h2>

                <p className="text-md text-brand-500 leading-relaxed mt-2 dark:text-white">
                    {day} | {date}
                </p>

                <button className="mt-4 w-full py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Clock In
                </button>
            </div>
        </div>
    )
}
