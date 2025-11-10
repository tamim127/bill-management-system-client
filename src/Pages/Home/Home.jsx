import Categories from "./Categories";
import CTA from "./CTA";
import Features from "./Features";
import HeroSlider from "./HeroSlider";
import HowItWorks from "./HowItWorks";
import MobileAppCTA from "./MobileAppCTA";
import PaymentPartners from "./PaymentPartners";
import RecentBillSection from "./RecentBillSection";
import StatsCounter from "./StatsCounter";
import Testimonials from "./Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen max-w-11/12 mx-auto bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <HeroSlider />
      <Categories />
      <RecentBillSection />
      <Features />
      <PaymentPartners />
      <StatsCounter />
      <HowItWorks />
      <MobileAppCTA/>
      <Testimonials />
      <CTA />
    </div>
  );
}
