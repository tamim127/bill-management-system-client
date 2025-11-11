import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiDollarSign, FiFilter } from "react-icons/fi";
import { CircleLoader } from "react-spinners";
import Spinner from "../Components/ui/Spinner";

const categories = [
  { value: "", label: "All Categories" },
  { value: "Electricity", label: "Electricity" },
  { value: "Water", label: "Water" },
  { value: "Internet", label: "Internet" },
  { value: "Gas", label: "Gas" },
  { value: "Sanitation", label: "Sanitation" },
  { value: "Telecom", label: "Telecom" },
];

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBills = (category = "") => {
    setLoading(true);
    //  API URL
    let url = "https://bill-management-system-servers.vercel.app/bills";

    //  Category
    if (category) {
      url += `?category=${category}`;
    }
    //  Fetch request
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBills(data);
      })
      .catch((error) => {
        console.error("Error fetching bills:", error);
        setBills([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch bills on mount & whenever category changes
  useEffect(() => {
    fetchBills(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            All Bills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Browse and pay any utility bill instantly
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <FiFilter />
            <span>Filter by:</span>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered w-full sm:w-64"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bills Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="text-xl text-gray-500 dark:text-gray-400">
              <Spinner />
            </div>
          </div>
        ) : bills.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No bills found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bills.map((bill) => (
              <div
                key={bill._id}
                className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
              >
                {/* Image */}
                <figure className="h-48 overflow-hidden">
                  <img
                    src={bill.image || "https://via.placeholder.com/400x300"}
                    alt={bill.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </figure>

                {/* Body */}
                <div className="card-body p-5">
                  <h2 className="card-title text-lg font-bold text-gray-800 dark:text-white">
                    {bill.title}
                  </h2>

                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 mb-1">
                    <FiMapPin />
                    <span>{bill.location}</span>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-primary mb-3">
                    <FiDollarSign />
                    <span>{bill.amount?.toLocaleString()}</span>
                  </div>

                  <div className="badge badge-outline badge-sm mb-3">
                    {bill.category
                      ? bill.category.charAt(0).toUpperCase() +
                        bill.category.slice(1)
                      : "N/A"}
                  </div>

                  <div className="card-actions">
                    <Link
                      to={`/bills/${bill._id}`}
                      className="btn btn-primary w-full"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bills;
