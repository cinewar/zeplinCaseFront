import Footer from "./components/footer";
import Hero from "./components/hero";
import InfoSection from "./components/infosection";
import Navbar from "./components/navbar";
import NewPublishSection from "./components/newpublishsection";
import NoticeSection from "./components/notice-section";
import WritingSection from "./components/writingsections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <NewPublishSection />
      <NoticeSection />
      <WritingSection />
      <Footer />
    </>
  );
}
