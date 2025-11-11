// pages/RefundPolicy.jsx
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  CreditCard,
  RotateCcw,
} from "lucide-react";

export default function RefundPolicy() {
  const lastUpdated = "November 12, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 mb-6">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We want you to be 100% satisfied. Here’s how refunds work.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
              <Shield className="w-7 h-7 text-green-600" />
              Our Commitment
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-bold text-green-600">UtiliPay</span>, we
              process your utility bill payments instantly. However, we
              understand issues may arise. This Refund Policy explains when and
              how you can request a refund.
            </p>
          </motion.div>

          {/* Eligible for Refund */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              When You Can Get a Refund
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Double Payment",
                  desc: "Same bill paid twice by mistake.",
                },
                {
                  title: "Payment Failed",
                  desc: "Money deducted but bill not updated.",
                },
                {
                  title: "Wrong Amount",
                  desc: "Paid more than the bill amount.",
                },
                {
                  title: "Technical Error",
                  desc: "System glitch caused incorrect processing.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not Eligible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-red-500" />
              When Refunds Are Not Possible
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Bill already paid to utility company",
                "Payment successful & confirmed",
                "User entered wrong account number",
                "Change of mind after payment",
                "Utility company delay (e.g., WASA update)",
                "Internet or bank issue",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Refund Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              How to Request a Refund
            </h2>
            <ol className="space-y-4 text-gray-600 dark:text-gray-300">
              {[
                {
                  step: "1",
                  desc: "Go to <strong>Transaction History</strong> in your dashboard.",
                },
                {
                  step: "2",
                  desc: "Find the payment and click <strong>Report Issue</strong>.",
                },
                {
                  step: "3",
                  desc: "Select reason and attach proof (screenshot).",
                },
                {
                  step: "4",
                  desc: "Submit. We’ll review within <strong>24 hours</strong>.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                </li>
              ))}
            </ol>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Pro Tip:</strong> Refunds are processed to your original
                payment method (bKash, Nagad, Card).
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Refund Timeline, Refund Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { time: "24 Hours", desc: "We review your request" },
                { time: "1–3 Days", desc: "Utility company confirms" },
                { time: "3–7 Days", desc: "Money back to your account" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold">{item.time}</div>
                  <p className="text-white/90 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Fee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
              <CreditCard className="w-7 h-7 text-blue-600" />
              Service Fee
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our convenience fee (<strong>৳5–৳15</strong> per bill) is{" "}
              <strong>non-refundable</strong>, even if the bill payment is
              refunded. This covers processing, SMS, and platform costs.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Need Help?
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:refund@utilipay.com"
                className="flex items-center gap-3 text-green-600 hover:underline font-medium"
              >
                <Mail className="w-5 h-5" />
                refund@utilipay.com
              </a>
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-3 text-green-600 hover:underline font-medium"
              >
                <Phone className="w-5 h-5" />
                +880 1700-000-000 (9 AM – 9 PM)
              </a>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                Rajshahi, Bangladesh
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              We respond to refund requests within <strong>24 hours</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 bg-base-300 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} UtiliPay. Trusted by 500,000+ users in
            Bangladesh.
          </p>
        </div>
      </section>
    </div>
  );
}
