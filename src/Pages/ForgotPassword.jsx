import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      toast.error("Invalid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      toast.success("Password reset email sent! Check your inbox.");
      setTimeout(() => navigate("/login"), 3000); // Redirect after 3s
    } catch (err) {
      const msg = err.message.includes("user-not-found")
        ? "No account found with this email."
        : "Failed to send reset email. Try again.";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-gray-700">
            {/* Back to Login */}
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary mb-6 transition-colors"
            >
              <FiArrowLeft /> Back to Login
            </Link>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Forgot Password?
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Enter your email and we'll send you a reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`input input-bordered w-full pl-10 pr-4 py-3 rounded-xl transition-all ${
                    error ? "input-error" : ""
                  }`}
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="alert alert-error text-sm py-2">{error}</div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
              Remember your password?{" "}
              <Link to="/login" className="link link-primary font-semibold">
                Login here
              </Link>
            </p>

            <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link to="/register" className="link link-primary font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
