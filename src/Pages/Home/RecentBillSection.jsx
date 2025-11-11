import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RecentBillSection() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bill-management-system-servers.vercel.app/recent-bills")
      .then((res) => res.json())
      .then((data) => setBills(data.slice(0, 6)))
      .catch(() => setBills([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <section className="px-6 sm:px-12 lg:px-20 py-12">
      {/* Heading */}
      <h2 className="text-5xl font-primary font-bold text-center text-primary dark:text-secondary mb-8">
        Recent Bills
      </h2>

      {/* Bills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
        {bills.map((bill, i) => (
          <motion.div
            key={bill._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-base-100 dark:bg-neutral border border-gray-200   dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-xl font-primary font-bold text-primary dark:text-secondary mb-3">
              {bill.title}
            </h3>

            {/* Info */}
            <div className="space-y-1 mb-4">
              <p className="text-sm font-secondary text-gray-700 dark:text-gray-300">
                <span className="font-bold">Category:</span>{" "}
                <span className="badge badge-secondary badge-sm">
                  {bill.category}
                </span>
              </p>
              <p className="text-sm font-secondary text-gray-700 dark:text-gray-300">
                <span className="font-bold">Location:</span> {bill.location}
              </p>
              <p className="text-sm font-secondary text-gray-700 dark:text-gray-300">
                <span className="font-bold">Date:</span>{" "}
                {new Date(bill.date).toLocaleDateString()}
              </p>
            </div>

            {/* Button */}
            <Link
              to={`/bills/${bill._id}`}
              className="btn bg-primary text-white dark:bg-secondary hover:bg-primary/90 dark:hover:bg-secondary/90 w-full rounded-full font-primary font-semibold transition-all"
            >
              See Details
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
