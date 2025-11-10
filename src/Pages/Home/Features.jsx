
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Bell,
  CreditCard,
  Calendar,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Bank-Grade Security",
    desc: "256-bit SSL, PCI-DSS, No card storage.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Instant Confirmation",
    desc: "Real-time receipt & SMS alert.",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Smart Reminders",
    desc: "Email, SMS, WhatsApp alerts.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "All Payment Modes",
    desc: "UPI, Card, Net Banking, Wallet.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Auto-Pay",
    desc: "Set once, relax forever.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24x7 Support",
    desc: "Chat, Call, Email — always here.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-base-200 to-base-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Trusted by 500,000+ users in Bangladesh
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
