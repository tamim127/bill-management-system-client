import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiUser, FiLogOut } from "react-icons/fi";
import ThemeToggle from "../UI/ThemToggle";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For desktop dropdown

  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Bills", path: "/bills" },
    { name: "About", path: "/about" },
    { name: "Help", path: "/help" },
    { name: "Contact", path: "/contact" },
    { name: "Terms & Privacy", path: "/termsPrivacy" },
    ...(user
      ? [
          { name: "My Pay Bills", path: "/my-bills" },
          { name: "Profile", path: "/profile" },
        ]
      : [
          { name: "Login", path: "/login" },
          { name: "Register", path: "/register" },
        ]),
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
      setMobileMenuOpen(false);
      setDropdownOpen(false);
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide text-primary hover:text-primary/80 transition-colors"
          >
            Utili<span className="text-secondary">Pay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-200">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative px-1 py-2 text-sm font-semibold transition-all duration-300
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                      ${
                        location.pathname === item.path
                          ? "text-primary after:w-full"
                          : "hover:text-primary after:w-0 hover:after:w-full"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Avatar + Click Dropdown */}
            {user && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
                  aria-label="User menu"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary ring-offset-2">
                    <img
                      src={user?.photoURL}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                 
                </button>

                {/* Dropdown Menu - Modern Production Version */}
                <ul
                  className={`
    absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl
    py-2 transition-all duration-300 origin-top-right transform
    ${
      dropdownOpen
        ? "opacity-100 scale-100 visible"
        : "opacity-0 scale-95 invisible"
    }
  `}
                  style={{ pointerEvents: dropdownOpen ? "auto" : "none" }}
                >
                  {/* Profile Link */}
                  <li>
                    <Link
                      to="/profile"
                      onClick={() => setDropdownOpen(false)}
                      className="
        flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200
        hover:bg-gray-100 dark:hover:bg-gray-700/80
        rounded-lg transition-colors duration-200
      "
                    >
                      <FiUser className="w-4 h-4" /> View Profile
                    </Link>
                  </li>

                  {/* Divider */}
                  <li>
                    <hr className="my-1 border-t border-gray-200 dark:border-gray-700" />
                  </li>

                  {/* Logout Button */}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="
        w-full flex items-center gap-2 text-left px-4 py-2.5 text-sm font-medium text-red-600
        hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg
        transition-colors duration-200
      "
                    >
                      <FiLogOut className="w-4 h-4" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Theme Toggle + Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors
                    ${
                      location.pathname === item.path
                        ? "bg-primary text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile User + Logout */}
            {user && (
              <>
                <li className="flex items-center gap-3 px-3 py-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary">
                    <img
                      src={
                        user.photoURL ||
                        "https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                      }
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 font-medium transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
