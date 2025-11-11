// pages/PrivacyPolicy.jsx
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "November 12, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your trust is our priority. We protect your data with bank-level
              security.
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
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
              <Lock className="w-7 h-7 text-primary" />
              Welcome to UtiliPay
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At <span className="font-bold text-primary">UtiliPay</span>, we
              are committed to protecting your privacy and ensuring the security
              of your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your data when you use our
              utility bill management platform, including our website, mobile
              app, and related services (collectively, the "Services").
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              By using our Services, you agree to this policy. We may update it
              periodically — the latest version is always available here.
            </p>
          </motion.div>

          {/* Data Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-7 h-7 text-primary" />
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Personal Information
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Name, email, phone number, and address when you register.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Utility account numbers (e.g., DESCO, WASA, Titas Gas).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Payment details (processed securely via bKash, Nagad,
                      etc.).
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  Usage Data
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      IP address, device type, browser, and location
                      (approximate).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Pages visited, bills paid, and time spent.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Data Usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              How We Use Your Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Process bill payments instantly",
                "Send due date reminders via SMS/Email",
                "Generate digital receipts",
                "Improve app performance & UX",
                "Provide 24/7 customer support",
                "Comply with Bangladesh laws",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8" />
              Bank-Level Security
            </h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>256-bit SSL encryption on all data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>PCI-DSS compliant payment processing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>No storage of full card details</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Regular security audits</span>
              </li>
            </ul>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Under Bangladesh's Digital Security Act and global standards, you
              have the right to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Access your data",
                "Correct inaccuracies",
                "Delete your account",
                "Export your bills",
                "Opt out of emails",
                "File a complaint",
              ].map((right, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-base-200 dark:bg-gray-700 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {right}
                  </span>
                </div>
              ))}
            </div>
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
              Contact Us
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:privacy@utilipay.com"
                className="flex items-center gap-3 text-primary hover:underline"
              >
                <Mail className="w-5 h-5" />
                <span>privacy@utilipay.com</span>
              </a>
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-3 text-primary hover:underline"
              >
                <Phone className="w-5 h-5" />
                <span>+880 1700-000-000</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Rajshahi, Bangladesh</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              We respond to all privacy requests within <strong>30 days</strong>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 bg-base-300 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} UtiliPay. Built with trust in
            Bangladesh.
          </p>
        </div>
      </section>
    </div>
  );
}
