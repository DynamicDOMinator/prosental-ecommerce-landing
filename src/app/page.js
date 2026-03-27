import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ComparisonChart from "../components/ComparisonChart";
import BenefitsSection from "../components/BenefitsSection";
import DashboardOverview from "../components/DashboardOverview";
import FeaturesSection from "../components/FeaturesSection";
import CustomCodeSection from "../components/CustomCodeSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-zinc-900 text-slate-50 overflow-x-hidden">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="benefits"><BenefitsSection /></div>
      <div id="comparison"><ComparisonChart /></div>
      <div id="dashboard"><DashboardOverview /></div>
      <div id="features"><FeaturesSection /></div>
      <div id="custom-code"><CustomCodeSection /></div>
      {/* <div id="pricing"><PricingSection /></div> */}
      <div id="faq"><FaqSection /></div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
