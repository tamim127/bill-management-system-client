// components/home/StatsCounter.jsx
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView && count === 0) {
      let start = 0;
      const duration = 2200;
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
    }
  }, [inView, end, count]);

  return (
    <span ref={ref} aria-live="polite">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
};

export default function StatsCounter() {
  const stats = [
    { label: "Bills Paid", value: 284000, suffix: "+" },
    { label: "Happy Users", value: 500000, suffix: "+" },
    { label: "Saved in Fees", value: 12000000, suffix: "৳" },
    { label: "Cities Covered", value: 64, suffix: "" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="flex flex-col items-center justify-center p-4 sm:p-6"
              role="region"
              aria-label={`${stat.label} statistic`}
            >
              {/* Counter */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
