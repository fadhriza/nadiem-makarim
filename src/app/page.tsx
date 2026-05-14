import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/ProgressIndicator";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <ProgressIndicator />
      <Hero />
      <Intro />
      <Marquee />
      <Timeline />
      <Footer />
    </main>
  );
}
