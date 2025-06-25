import Image from "next/image";
import { HeroSection } from "./_sections/Hero";
import { Countdown } from "./_sections/Countdown";
import { Featured } from "./_sections/Featured";
import { Banner } from "./_sections/Banner";
import { EventAlert } from "./_sections/EventDialog";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Countdown />
      <Featured />
    </main>
  );
}
