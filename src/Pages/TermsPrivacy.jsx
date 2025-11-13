import { useState } from "react";
import {
  FileText,
  Shield,
  Search,
  Copy,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";

export default function TermsPrivacy() {
  const [activeTab, setActiveTab] = useState("terms");
  const [searchTerm, setSearchTerm] = useState("");
  const [openSection, setOpenSection] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const termsSections = [
    {
      id: 1,
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using Utility Bill Manager, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.",
    },
    {
      id: 2,
      title: "2. User Accounts",
      content:
        "You must create an account to pay bills. You are responsible for maintaining the confidentiality of your account and password.",
    },
    {
      id: 3,
      title: "3. Payment Processing",
      content:
        "We do not store your payment information. All transactions are processed securely through third-party payment gateways.",
    },
    {
      id: 4,
      title: "4. Prohibited Activities",
      content:
        "You may not use the service for any illegal purpose, or to pay bills that are not yours without authorization.",
    },
    {
      id: 5,
      title: "5. Termination",
      content:
        "We reserve the right to suspend or terminate your account if you violate these terms.",
    },
  ];

  const privacySections = [
    {
      id: 1,
      title: "1. Information We Collect",
      content:
        "We collect your name, email, phone, address, and payment history to provide bill payment services.",
    },
    {
      id: 2,
      title: "2. How We Use Your Data",
      content:
        "Your data is used to process payments, send receipts, and improve our service. We never sell your data.",
    },
    {
      id: 3,
      title: "3. Data Security",
      content:
        "We use Firebase Authentication and encryption to protect your information. Access is limited to authorized personnel only.",
    },
    {
      id: 4,
      title: "4. Third-Party Services",
      content:
        "We use Firebase and payment gateways. Their privacy policies also apply when you use their services.",
    },
    {
      id: 5,
      title: "5. Your Rights",
      content:
        "You can request to delete your account and data at any time by contacting support.",
    },
  ];

  const currentSections =
    activeTab === "terms" ? termsSections : privacySections;

  const filteredSections = currentSections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <title>Terms of Service</title>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Legal Documents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about using our service.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="btn-group rounded-full shadow-lg">
            <button
              onClick={() => setActiveTab("terms")}
              className={`btn ${
                activeTab === "terms" ? "btn-primary" : "btn-ghost"
              } rounded-full`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Terms of Service
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`btn ${
                activeTab === "privacy" ? "btn-primary" : "btn-ghost"
              } rounded-full`}
            >
              <Shield className="w-5 h-5 mr-2" />
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search in ${
              activeTab === "terms" ? "Terms" : "Privacy"
            }...`}
            className="input input-bordered w-full pl-12 rounded-full shadow"
          />
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-8">
          <div className="space-y-4">
            {filteredSections.length > 0 ? (
              filteredSections.map((sec) => (
                <div
                  key={sec.id}
                  className="border border-base-300 dark:border-gray-700 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenSection(openSection === sec.id ? null : sec.id)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-base-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {sec.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openSection === sec.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openSection === sec.id && (
                    <div className="px-6 pb-4 border-t border-base-300 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                        {sec.content}
                      </p>
                      <button
                        onClick={() => copyToClipboard(sec.content)}
                        className="mt-3 flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        {copied ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Text
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  No results found.
                </p>
              </div>
            )}
          </div>

          {/* Last Updated */}
          <div className="mt-8 pt-6 border-t border-base-300 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated:{" "}
              <span className="font-medium">November 09, 2025</span>
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300">
            Questions?{" "}
            <a href="/contact" className="link link-primary">
              Contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
