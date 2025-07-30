import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import ForumSection from "../components/ForumSection";
import SmartWalletSection from "../components/SmartWalletSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Add other attractive sections/components here */}
      <WhyChooseUs /> 
      <ForumSection />
      <SmartWalletSection />
      <HowItWorks/> 
      <Testimonials/>
      {/* <DownloadAppSection/> */}
      <Footer />
    </>
  );
}

export default HomePage;
