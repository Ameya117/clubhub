import About from "@/components/About";
import Navbar from "@/components/Navbar/Navbar";
import PastEvents from "@/components/PastEvents";
export default function Home() {
  return (
    <main>
      
      <Navbar />
      <About/>
      <PastEvents/>
    </main>
  );
}
