'use client'
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About";
import PastEvents from "@/components/PastEvents";
import UpcomingEventsCarousel from "@/components/UpcomingEventsCarousel";
import Header from "@/components/Header";
import ClubFlipCards from "@/components/ClubFlipCards";
export default function Home() {
  return (
    
      <main>
        <Navbar />
        <Header />
        <UpcomingEventsCarousel />
        <About />
        <ClubFlipCards />
        <PastEvents />
      </main>
   
  );
}
