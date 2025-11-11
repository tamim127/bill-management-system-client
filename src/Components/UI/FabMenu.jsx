import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHelpCircle, FiPhoneCall, FiSettings } from "react-icons/fi";

const FabMenu = () => {
  const [open, setOpen] = useState(false);

  const buttons = [
    { name: "Contact", path: "/contact", icon: <FiPhoneCall /> },
    { name: "Help", path: "/help", icon: <FiHelpCircle /> },
    { name: "About", path: "/about", icon: <FiSettings /> },
  ];

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="fixed bottom-10 right-12 z-20">
      {/* Main FAB */}
      <button
        onClick={toggleOpen}
        className={`w-12 h-12 rounded-full bg-primary dark:bg-secondary text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}
        aria-label="Floating Action Button"
      >
        {open ? "×" : "+"}
      </button>

      {/* Radial buttons */}
      <div className="absolute bottom-10 right-14">
        {buttons.map((btn, index) => {
          const angle = (index + 1) * 45; 
          const distance = open ? 70 : 0;
          const x = distance * Math.cos((angle * Math.PI) / 180);
          const y = distance * Math.sin((angle * Math.PI) / 180);

          return (
            <Link
              key={btn.name}
              to={btn.path}
              className={`absolute w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-amber-400 hover:scale-105 shadow-lg flex items-center justify-center transform transition-all duration-300`}
              style={{
                transform: `translate(${-x}px, ${-y}px) scale(${open ? 1 : 0})`,
              }}
              onClick={() => setOpen(false)}
              title={btn.name}
            >
              {btn.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FabMenu;
