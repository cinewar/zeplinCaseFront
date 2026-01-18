import Hero from "./components/hero";
import InfoSection from "./components/infosection";
import Navbar from "./components/navbar";
import NewPublishSection from "./components/newpublishsection";
import NoticeSection from "./components/notice-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <NewPublishSection />
      <NoticeSection />
    </>
  );
}
