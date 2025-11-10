// components/layout/Footer.jsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  
  const socialLinks = {
    facebook: "https://facebook.com/utilipaybd",
    twitter: "https://twitter.com/utilipaybd",
    linkedin: "https://linkedin.com/company/utilipay",
    github: "https://github.com/tamim/utilipay",
  };

  return (
    <footer className=" dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="text-3xl font-extrabold text-primary tracking-tight inline-block"
            >
              Utili<span className="text-secondary">Pay</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              A smart and secure way to manage your utility bills. Pay
              seamlessly, track easily, and stay in control.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <FaMapMarkerAlt className="text-primary" />
              <span>Rajshahi, Bangladesh</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/bills", label: "All Bills" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Service" },
                { to: "/help", label: "Help Center" },
                { to: "/refund", label: "Refund Policy" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="mailto:support@utilipay.com"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FaEnvelope className="text-primary" />
                support@utilipay.com
              </a>
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FaPhoneAlt className="text-primary" />
                +880 1700-000-000
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: <FaFacebookF />,
                  href: socialLinks.facebook,
                  label: "Facebook",
                },
                {
                  icon: <FaTwitter />,
                  href: socialLinks.twitter,
                  label: "Twitter",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: socialLinks.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  href: socialLinks.github,
                  label: "GitHub",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <p>
            © {currentYear}{" "}
            <span className="font-medium text-primary">UtiliPay</span>. All
            rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <a
              href="https://github.com/tamim"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Tamim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
