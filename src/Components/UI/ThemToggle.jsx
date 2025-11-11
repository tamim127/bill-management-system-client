"use client";

import { useTheme } from "../../Context/ThemContext";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className="btn btn-ghost btn-circle" disabled>
        <div className="skeleton w-5 h-5 rounded-full"></div>
      </button>
    );

  const isDark = theme === "dark";

  return (
    <label
      className="relative swap swap-rotate btn btn-ghost btn-circle flex items-center justify-center hover:bg-base-300/50 transition-all duration-300 ease-in-out group"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={`Toggle ${isDark ? "light" : "dark"} mode`}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        className="swap-input"
        aria-hidden="true"
      />
      {/* Sun */}
      <Sun
        className={`swap-off absolute w-5 h-5 text-warning transition-all duration-500 group-hover:scale-110 ${
          isDark ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
        }`}
        strokeWidth={2}
      />
      {/* Moon */}
      <Moon
        className={`swap-on absolute w-5 h-5 text-info transition-all duration-500 group-hover:scale-110 ${
          isDark ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
        }`}
        strokeWidth={2}
      />
      {/* Tooltip */}{" "}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
        {" "}
        <div className="bg-base-200 text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
          {" "}
          {isDark ? "Light Mode" : "Dark Mode"}{" "}
        </div>{" "}
        <div className="w-2 h-2 bg-base-200 rotate-45 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"></div>{" "}
      </div>
    </label>
  );
};

export default ThemeToggle;
