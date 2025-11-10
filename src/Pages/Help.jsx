import { useState } from "react";
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  HelpCircle,
  Zap,
  Shield,
  Clock,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "payment",
      question: "How do I pay a bill?",
      answer:
        "Go to the Bills page, select a bill, and click 'Pay Now'. Fill in your details and confirm.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 2,
      category: "payment",
      question: "Can I pay bills for previous months?",
      answer:
        "No, only current month bills can be paid for accuracy and policy compliance.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: 3,
      category: "account",
      question: "How do I update my profile?",
      answer:
        "Click on your avatar in the navbar, then click 'Edit Profile' to update name, phone, or address.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    {
      id: 4,
      category: "account",
      question: "Is my data secure?",
      answer:
        "Yes! We use bank-level encryption and Firebase Authentication to protect your information.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: 5,
      category: "general",
      question: "Which utilities are supported?",
      answer:
        "Electricity, Water, Gas, Internet & TV — all major utilities in one app.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: 6,
      category: "general",
      question: "Do I need to register to view bills?",
      answer:
        "No, bills are public. But you need to log in to pay or track your payments.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
  ];

  const categories = [
    { id: "all", label: "All Topics", count: faqs.length },
    {
      id: "payment",
      label: "Payment",
      count: faqs.filter((f) => f.category === "payment").length,
    },
    {
      id: "account",
      label: "Account",
      count: faqs.filter((f) => f.category === "account").length,
    },
    {
      id: "general",
      label: "General",
      count: faqs.filter((f) => f.category === "general").length,
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || faq.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800">
      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Find answers to common questions or reach out to us.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input input-bordered input-lg w-full pl-12 rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn ${
                  activeTab === cat.id ? "btn-primary" : "btn-ghost"
                } rounded-full`}
              >
                {cat.label}{" "}
                <span className="ml-1 badge badge-sm">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-base-200 dark:bg-gray-700 rounded-lg">
                      {faq.icon}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 mt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No results found. Try a different search term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-base-300 to-base-200 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Still need help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our support team is here for you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@utilitybill.com"
              className="flex items-center justify-center gap-2 btn btn-outline btn-primary rounded-full"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="tel:+880123456789"
              className="flex items-center justify-center gap-2 btn btn-outline btn-success rounded-full"
            >
              <Phone className="w-5 h-5" />
              Call Support
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 btn btn-ghost rounded-full"
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
