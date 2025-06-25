"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const Countdown = () => {
    const [timeleft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date ("2025-12-20T20:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
        
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-10 bg-gray text-center">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">Countdown to the Grand Finale</h2>
            <div className="flex justify-center gap-4 text-lg md:text-2xl font-bold">
                <Card className="p-4 rounded-2xl shadow-md">{timeleft.days}d</Card>
                <Card className="p-4 rounded-2xl shadow-md">{timeleft.hours}h</Card>
                <Card className="p-4 rounded-2xl shadow-md">{timeleft.minutes}m</Card>
                <Card className="p-4 rounded-2xl shadow-md">{timeleft.seconds}s</Card>
            </div>
        </section>
    );
}
export { Countdown };
