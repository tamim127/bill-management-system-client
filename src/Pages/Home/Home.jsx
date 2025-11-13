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

import Lottie from "lottie-react";
import Budget from "../../assets/Budgeting.json";
import Payment from "../../assets/OnlinePayment.json";
import Report from "../../assets/FinancialReport.json";
import MobileApp from "../../assets/MobileApp.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 dark:bg-gray-900 transition-colors duration-300">
      <title>Home</title>
      {/* Hero Slider */}
      <HeroSlider />
      {/* Budget Management */}

      <section className="max-w-7xl  mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie
              animationData={Budget}
              loop
              autoplay
              className="w-80 h-80 md:w-96 md:h-96"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white leading-tight">
              Track Electricity, Water & Gas Bills in One Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              Know exactly where your money goes every month.{" "}
              <strong>Auto-track</strong> every utility bill, spot rising costs
              early, and get <strong>smart saving tips</strong> — all in one
              place, for free.
            </p>
            <button className="btn btn-primary px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <span>Start Tracking Now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Categories & Recent Bills */}

      <Categories />
      <RecentBillSection />

      {/* Download Reports */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie
              animationData={Report}
              loop
              autoplay
              className="w-80 h-80 md:w-96 md:h-96"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Download Monthly Bill Reports as PDF
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Need proof for tax, audit, or landlord? Generate a professional
              PDF report with all transactions, dates, and amounts — in one
              click.
            </p>
            <button className="btn btn-accent px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <span>Download Report</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Features />
      </div>

      {/* Easy Online Payments */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm my-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Pay Your Bills in One Tap
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Use bKash, Nagad, Rocket or card — pay instantly and securely. Get
              an instant receipt and never miss a due date again.
            </p>
            <button className="btn btn-secondary px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <span>Pay Now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie
              animationData={Payment}
              loop
              autoplay
              className="w-80 h-80 md:w-96 md:h-96"
            />
          </div>
        </div>
      </section>

      {/* Payment Partners & Stats */}

      <PaymentPartners />
      <StatsCounter />

      {/* How It Works */}

      <HowItWorks />

      {/* Mobile App CTA */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie
              animationData={MobileApp}
              loop
              autoplay
              className="w-80 h-80 md:w-96 md:h-96"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Manage Anywhere, Anytime
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              Check bills, pay instantly, and set reminders from your phone,
              tablet, or laptop. Your bills, always in your pocket.
            </p>
            <button className="btn btn-primary px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <span>Get the App</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      <MobileAppCTA />
      <Testimonials />
      <CTA />
    </div>
  );
}
