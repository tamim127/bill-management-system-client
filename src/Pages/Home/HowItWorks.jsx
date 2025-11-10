// components/home/HowItWorks.jsx
import { motion } from "framer-motion";
import { Search, CreditCard, CheckCircle } from "lucide-react";

export default function HowItWorks() {
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
    <section className="py-20 px-4 bg-base-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Pay Bills in 30 Seconds
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            It’s that simple.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {i + 1}. {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
