import { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AfromericaEvent() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date("2025-12-20T20:00:00").getTime();
      const diff = target - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-50">
        <div className="flex items-center gap-2">
          <Image src="/afromerica-logo.png" alt="Afromerica Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-orange-600">Afromerica Entertainment</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-800 font-semibold">
          <a href="#" className="hover:text-orange-600">Home</a>
          <a href="#" className="hover:text-orange-600">Events</a>
          <a href="#" className="hover:text-orange-600">Register</a>
          <a href="#" className="hover:text-orange-600">Contact</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="h-[90vh] bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('/images/slide1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">The Biggest Talent Hunt in Africa</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Join the wave with Afromerica Entertainment. Showcase your gift. Get discovered. Win big!</p>
          <Button className="bg-orange-600 text-white px-6 py-3 text-lg rounded-xl shadow-xl">Register Now</Button>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-10 text-center bg-orange-50">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">Countdown to Grand Finale</h3>
        <div className="flex justify-center gap-4 text-xl md:text-2xl">
          <Card className="p-4 rounded-xl">{timeLeft.days}d</Card>
          <Card className="p-4 rounded-xl">{timeLeft.hours}h</Card>
          <Card className="p-4 rounded-xl">{timeLeft.minutes}m</Card>
          <Card className="p-4 rounded-xl">{timeLeft.seconds}s</Card>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-24 text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">Why Afromerica?</h3>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Afromerica Entertainment is a movement to discover and promote the next generation of African superstars through nationwide street and online talent hunts. From music to dance, fashion to comedy — it’s your moment to shine!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        &copy; 2025 Afromerica Entertainment | www.afromericaent.com | @afromerica.official on IG, TikTok, YouTube, Facebook
      </footer>
    </main>
  );
}
