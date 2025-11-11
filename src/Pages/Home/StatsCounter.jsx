// components/home/StatsCounter.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; 
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span aria-live="polite">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
};

export default function StatsCounter() {
  const stats = [
    { label: "Bills Paid", value: 284000, suffix: "+" },
    { label: "Happy Users", value: 500000, suffix: "+" },
    { label: "Saved in Fees", value: 12000000, suffix: "" },
    { label: "Cities Covered", value: 64, suffix: "" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Counter */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-white/90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
