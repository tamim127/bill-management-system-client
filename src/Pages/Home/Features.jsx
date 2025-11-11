import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Bell,
  CreditCard,
  Calendar,
  Headphones,
} from "lucide-react";
import { useTheme } from "../../Context/ThemContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 px-4 bg-gradient-to-b ${
        isDark ? "from-gray-900 to-gray-800" : "from-base-200 to-base-100"
      }`}
    >
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
              isDark ? "text-secondary " : "text-primary "
            }`}
          >
            Why Choose Us?
          </h2>
          <p
            className={`text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            } font-sans`}
          >
            Trusted by 500,000+ users in Bangladesh
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-transform group-hover:scale-110 ${
                  isDark
                    ? "bg-secondary/20 text-secondary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {f.icon}
              </div>
              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white font-sans" : "text-gray-800 font-serif"
                }`}
              >
                {f.title}
              </h3>
              {/* Description */}
              <p className={`text-gray-600 dark:text-gray-300 font-sans`}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
