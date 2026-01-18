import Hero from "./components/hero";
import InfoSection from "./components/infosection";
import Navbar from "./components/navbar";
import NewPublishSection from "./components/newpublishsection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <NewPublishSection />
    </>
  );
}
