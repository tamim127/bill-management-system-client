
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Pay All Bills in One Place",
    desc: "Electricity, Water, Gas, Internet — everything under one roof.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
  },
  {
    title: "Never Miss a Due Date",
    desc: "Smart reminders via SMS, Email, and Push Notifications.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=900&fit=crop",
  },
  {
    title: "100% Secure Payments",
    desc: "Bank-level encryption. No card data stored.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full flex items-center justify-center text-center">
              <img
                src={slide.img}
                alt={slide.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 max-w-4xl px-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-lg mb-8 max-w-2xl mx-auto">
                  {slide.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/bills"
                    className="btn btn-primary btn-lg rounded-full shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    View Bills <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-outline btn-lg rounded-full text-white border-white hover:bg-white hover:text-black transition-all"
                  >
                    Get Started Free
                  </Link>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
