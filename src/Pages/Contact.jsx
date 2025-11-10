import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Message sent successfully! We'll reply within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or feedback? We're here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`input input-bordered w-full ${
                    errors.name ? "input-error" : ""
                  }`}
                  placeholder="John Doe"
                  disabled={loading}
                />
                {errors.name && (
                  <p className="text-error text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                  placeholder="john@example.com"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-error text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className={`input input-bordered w-full ${
                    errors.subject ? "input-error" : ""
                  }`}
                  placeholder="Billing Issue"
                  disabled={loading}
                />
                {errors.subject && (
                  <p className="text-error text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                  className={`textarea textarea-bordered w-full ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  placeholder="Write your message here..."
                  disabled={loading}
                />
                {errors.message && (
                  <p className="text-error text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full rounded-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold">Email</h3>
                <p className="text-sm mt-1">support@utilitybill.com</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-lg text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold">Call</h3>
                <p className="text-sm mt-1">+880 123 456 789</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-bold">Live Chat</h3>
                <p className="text-sm mt-1">Available 24/7</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    Office Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    House 12, Road 5, Block C<br />
                    Mirpur, Dhaka 1216
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-64">
              <iframe
                title="Utility Bill Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277!2d90.366!3d23.806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c66f1b3c8d%3A0x8b7b5e6f6f6f6f6f!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1698000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">
              Average response time: under 2 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
