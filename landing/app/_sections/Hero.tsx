"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
    

    const slides = [
        "/Hero1.jpeg",
        "/Hero1.jpeg",
        "/Hero1.jpeg",
        "/Hero1.jpeg",
    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <section className="relative w-full h-[80vh] overflow-hidden pt-20">
            <Image 
                className="w-full h-full object-cover transition-all duration-1000"
                src={slides[currentSlide]}
                alt="Afromerica slideshow"
                fill={true}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
                <h1 className="text-4xl md:text-6cl font-bold mb-4">Welcome to Afromerica Entertainment</h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl">Where African Talent takes center stage - Music, fashion, culture and opportunity</p>
                <Button variant="default" size="lg" className="bg-orange-600 text-white text-lg shadow-xl">Register for Talent Hunt</Button>
            </div>
        </section>
    );
}

export { HeroSection }