// components/home/MobileAppCTA.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MobileAppCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: Mobile = 1 col, MD+ = 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text + Buttons */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Pay Bills on the Go!
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-lg mx-auto md:mx-0">
              Download our app and pay bills from anywhere — even without
              internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="btn btn-white btn-md sm:btn-lg rounded-full flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base"
              >
                <img
                  src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-play-store-app-logo-gets-a-slight-redesign-png-19.png"
                  alt="Play Store"
                  className="h-5 sm:h-6 w-auto"
                />
                Google Play
              </a>
              <a
                href="#"
                className="btn btn-white btn-md sm:btn-lg rounded-full flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base"
              >
                <img
                  src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-mac-app-store-apple-aggiorna-con-grafica-flat-per-21.png"
                  alt="App Store"
                  className="h-5 sm:h-6 w-auto"
                />
                App Store
              </a>
            </div>
          </motion.div>

          {/* Right: Mobile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              <img
                src="https://cdn.dribbble.com/userupload/14212814/file/original-8c3f9a797a9407b66e205cdbdb10caea.jpg?format=webp&resize=400x300&vertical=center"
                alt="Mobile App"
                className="w-52 sm:w-60 md:w-64 lg:w-72 h-auto rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
