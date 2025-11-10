import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RecentBillSection() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/bills")
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-14">
      {bills.map((bill, i) => (
        <motion.div
          key={bill._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{bill.title}</h3>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Category:</strong>{" "}
            <span className="badge badge-primary badge-sm">
              {bill.category}
            </span>
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Location:</strong> {bill.location}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Date:</strong> {new Date(bill.date).toLocaleDateString()}
          </p>
          <Link
            to={`/bills/${bill._id}`}
            className="btn btn-primary btn-sm w-full rounded-full"
          >
            See Details
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
