
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahim Khan",
    role: "Dhaka",
    text: "Saved 2 hours every month! Best bill app.",
    rating: 5,
  },
  {
    name: "Ayesha Begum",
    role: "Chittagong",
    text: "Auto-pay is a lifesaver. No more late fees!",
    rating: 5,
  },
  {
    name: "Karim Hossain",
    role: "Sylhet",
    text: "Secure, fast, and super easy to use.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4  dark:bg-gray-800">
      <div className="max-w-7xl  mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Loved by Users
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            500,000+ happy customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className=" bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex  mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-gray-800 dark:text-white">
                  {t.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
