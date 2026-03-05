import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import sunrise from "../../assets/sunrise.jpg";
import sunset from "../../assets/sunset.jpg";
import moon from "../../assets/moon.jpg";

export default function Welcome() {
    const { user } = useAuth()
    const [greeting, setGreeting] = useState("")
    const [image, setImage] = useState("")
    const [quote, setQuote] = useState("");

    const quotes = [
        "Success is built one disciplined day at a time.",
        "Small progress every day leads to big results.",
        "Consistency beats intensity.",
        "Push yourself — no one else will.",
        "Great things never come from comfort zones.",
        "Your future is created by what you do today.",
        "Stay focused. Stay humble. Stay hungry.",
        "Discipline is choosing what you want most over what you want now."
    ];

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 4 && hour < 12) {
            setGreeting("Good Morning");
        } else if (hour >= 12 && hour < 17) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }

        if (hour >= 6 && hour < 15) {
            setImage(sunrise);
        } else if (hour >= 15 && hour < 18) {
            setImage(sunset);
        } else {
            setImage(moon);
        }
    }, []);


    useEffect(() => {
        const todayKey = new Date().toDateString();

        const stored = localStorage.getItem("dailyQuoteDate");

        if (stored === todayKey) {
            setQuote(localStorage.getItem("dailyQuote"));
        } else {
            const random = quotes[Math.floor(Math.random() * quotes.length)];
            localStorage.setItem("dailyQuote", random);
            localStorage.setItem("dailyQuoteDate", todayKey);
            setQuote(random);
        }
    }, []);

    return (
        <div className="relative col-span-3 xl:col-span-3 lg:col-span-2 rounded-xl overflow-hidden">

            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative px-8 py-16">
                <h2 className="text-2xl font-semibold text-white mb-3">
                    {greeting}, {user?.name || 'Kunal'}!
                </h2>

                <p className="text-white text-lg leading-relaxed max-w-md">
                    {quote}
                </p>
            </div>
        </div>
    )
}
