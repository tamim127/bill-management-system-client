
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Droplet, Flame, Globe, Zap } from "lucide-react";

const categories = [
  {
    title: "Electricity",
    icon: <Zap className="w-12 h-12" />,
    color: "from-yellow-400 to-orange-500",
    query: "electricity",
  },
  {
    title: "Water",
    icon: <Droplet className="w-12 h-12" />,
    color: "from-blue-400 to-cyan-500",
    query: "water",
  },
  {
    title: "Internet & TV",
    icon: <Globe className="w-12 h-12" />,
    color: "from-purple-400 to-pink-500",
    query: "internet",
  },
  {
    title: "Gas & Heating",
    icon: <Flame className="w-12 h-12" />,
    color: "from-red-400 to-rose-500",
    query: "gas",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Pay Any Utility Bill
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            One platform for all your monthly bills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/bills?category=${cat.query}`)}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative p-8 text-center z-10">
                <div className="flex justify-center mb-4 text-orange-500 group-hover:text-white transition-colors duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-500">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 group-hover:text-white/80 transition-colors duration-500">
                  View & Pay
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
