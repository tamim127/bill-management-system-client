
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20  px-4 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Start Paying Smarter Today
        </motion.h2>
        <p className="text-xl mb-8 opacity-90">
          Join 500,000+ users who save time every month.
        </p>
        <Link
          to="/register"
          className="btn btn-lg btn-white rounded-full shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2"
        >
          Get Started Free <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
