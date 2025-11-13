import {
  Zap,
  Shield,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Instant Payments",
      desc: "Pay your bills in seconds with our secure gateway.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Bank-Level Security",
      desc: "Your data is encrypted and protected 24/7.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "All Utilities Covered",
      desc: "Electricity, Water, Gas, Internet — all in one place.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "User-Friendly",
      desc: "Designed for everyone — easy, fast, and reliable.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Sarah Kim",
      role: "Lead Developer",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Mike Chen",
      role: "UX Designer",
      img: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800">
      <title>About</title>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Simplifying Utility Payments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We make paying bills easy, fast, and secure — so you can focus on
            what matters.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/bills" className="btn btn-primary btn-lg rounded-full">
              Explore Bills <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/register" className="btn btn-ghost btn-lg rounded-full">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 bg-gradient-to-br from-base-100 to-base-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 p-3 bg-white dark:bg-gray-900 rounded-xl w-fit shadow-md group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To empower every household with a seamless, transparent, and
              stress-free way to manage and pay utility bills — anytime,
              anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-base-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-4 text-center bg-gradient-to-t from-base-200 to-base-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Simplify Your Bills?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands who trust us with their monthly payments.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg rounded-full">
            Start Free Today
          </Link>
        </div>
      </section>
    </div>
  );
}
