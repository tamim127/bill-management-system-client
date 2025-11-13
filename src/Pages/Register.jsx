import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import {
  FiEye,
  FiEyeOff,
  FiUser,
  FiMail,
  FiLock,
  FiImage,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState("");

  const { register, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Password strength
  const getPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 6) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const strength = getPasswordStrength(formData.password);
  const strengthColor =
    strength <= 2
      ? "bg-red-500"
      : strength <= 4
      ? "bg-yellow-500"
      : "bg-green-500";

  // Validate on change
  useEffect(() => {
    const newErrors = {};
    if (formData.name && formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (formData.photoURL && !/^https?:\/\/\S+$/.test(formData.photoURL))
      newErrors.photoURL = "Invalid URL";
    setErrors(newErrors);
  }, [formData]);

  // Update photo preview
  useEffect(() => {
    if (formData.photoURL) {
      setPhotoPreview(formData.photoURL);
    } else {
      setPhotoPreview("");
    }
  }, [formData.photoURL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation
    if (strength < 3) {
      toast.error(
        "Password is too weak. Use uppercase, lowercase, and numbers."
      );
      return;
    }
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors above.");
      return;
    }

    setLoading(true);
    try {
      await register(
        formData.name,
        formData.email,
        formData.photoURL || null,
        formData.password
      );
      toast.success("Account created successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      const msg = err.message || "Registration failed. Try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Google login failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 p-4">
        <title>Register</title>
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-gray-700">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                Create Account
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Join UtiliPay today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-10 pr-4 py-3 rounded-xl transition-all ${
                    errors.name ? "input-error" : ""
                  }`}
                  required
                />
                {errors.name && (
                  <p className="text-error text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-10 pr-4 py-3 rounded-xl transition-all ${
                    errors.email ? "input-error" : ""
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-error text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Photo URL + Preview */}
              <div className="relative">
                <FiImage className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Photo URL (optional)"
                  value={formData.photoURL}
                  onChange={handleChange}
                  className={`input input-bordered w-full pl-10 pr-4 py-3 rounded-xl transition-all ${
                    errors.photoURL ? "input-error" : ""
                  }`}
                />
                {errors.photoURL && (
                  <p className="text-error text-xs mt-1">{errors.photoURL}</p>
                )}
              </div>

              {photoPreview && (
                <div className="flex justify-center mt-3">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20"
                    onError={() => setPhotoPreview("")}
                  />
                </div>
              )}

              {/* Password */}
              <div className="relative">
                <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input input-bordered w-full pl-10 pr-12 py-3 rounded-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {/* Password Strength Bar */}
              {formData.password && (
                <div className="space-y-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          i <= strength ? strengthColor : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {strength <= 2
                      ? "Weak"
                      : strength <= 4
                      ? "Medium"
                      : "Strong"}
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || strength < 3}
                className="btn btn-primary w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className="divider my-6 text-gray-500">OR</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="btn w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-3 hover:shadow-md transition-all"
            >
              {googleLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  <FcGoogle className="text-xl" />
                  <span className="font-medium">Continue with Google</span>
                </>
              )}
            </button>

            <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
