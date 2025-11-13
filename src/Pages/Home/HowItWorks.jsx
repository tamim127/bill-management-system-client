// components/home/HowItWorks.jsx
import { motion } from "framer-motion";
import { Search, CreditCard, CheckCircle } from "lucide-react";
import { useTheme } from "../../Context/ThemContext";

export default function HowItWorks() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const steps = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Find Your Bill",
      desc: "Search by account number or provider.",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Pay Securely",
      desc: "Choose bKash, Card, or Bank.",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Get Instant Receipt",
      desc: "SMS + Email + App.",
    },
  ];

  return (
    <section className={`py-20 px-6 ${isDark ? "bg-gray-900" : "bg-base-200"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-secondary font-sans" : "text-primary font-serif"
            }`}
          >
            Pay Bills in 30 Seconds
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            } font-sans`}
          >
            It’s that simple.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-transform group-hover:scale-110 ${
                  isDark
                    ? "bg-secondary/20 text-secondary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {step.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isDark ? "text-white font-sans" : "text-gray-800 font-serif"
                }`}
              >
                {i + 1}. {step.title}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 font-sans`}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
