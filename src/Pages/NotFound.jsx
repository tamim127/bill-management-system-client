import { Link, useNavigate } from "react-router-dom";
import { Home, Search, AlertCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/bills?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <title>Error-404</title>
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">
            404
          </h1>
        </div>

        {/* Funny Message */}
        <div className="mb-8 space-y-3">
          <div className="flex justify-center mb-4">
            <AlertCircle className="w-16 h-16 text-warning animate-bounce" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Oops! Page Not Found
          </h2>
          
        </div>

       

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn btn-primary btn-lg rounded-full flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link to="/bills" className="btn btn-outline btn-lg rounded-full">
            View All Bills
          </Link>
        </div>

        {/* Fun Footer */}
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            If you think this is a mistake,{" "}
            <Link to="/contact" className="link link-primary">
              contact support
            </Link>
            .
          </p>
          <p className="mt-2">
            Error Code: <span className="font-mono badge badge-error">404</span>
          </p>
        </div>
      </div>
    </div>
  );
}
