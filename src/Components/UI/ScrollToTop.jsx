import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed left-6 bottom-10 w-12 h-12 rounded-full bg-primary dark:bg-secondary text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Scroll to top"
    >
      <FiChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
