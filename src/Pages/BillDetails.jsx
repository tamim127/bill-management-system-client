import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiMapPin,
  FiDollarSign,
  FiCalendar,
} from "react-icons/fi";

export default function BillDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [bill, setBill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.displayName || "",
    address: "",
    phone: "",
    additionalInfo: "",
  });

  // Fetch bill by ID
  useEffect(() => {
    const fetchBill = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/bills/${id}`);
        const data = await res.json();
        setBill(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBill();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading bill details...</p>
      </div>
    );

  if (!bill || bill.error)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-error">Bill Not Found</h2>
        <Link to="/bills" className="btn btn-primary mt-4">
          Back to Bills
        </Link>
      </div>
    );

  const today = new Date();
  const billDate = new Date(bill.date || bill.createdAt);
  const isCurrentMonth =
    billDate.getMonth() === today.getMonth() &&
    billDate.getFullYear() === today.getFullYear();

  const handlePay = () => {
    if (!isCurrentMonth) return;
    setShowModal(true);
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

   const paymentData = {
     billId: bill._id,
     username: formData.username,
     phone: formData.phone,
     address: formData.address,
     email: user?.email,
     amount: bill.amount,
     date: new Date().toISOString().slice(0, 10), 
   };

   try {
     const res = await fetch("http://localhost:3000/mybills", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(paymentData),
     });

     if (res.ok) {
       toast.success(" Payment Successful!");
       setShowModal(false);
       setTimeout(() => navigate("/my-bills"), 1500);
     } else {
       toast.error(" Failed to process payment");
     }
   } catch (err) {
     console.error(err);
     toast.error("Payment request failed");
   }
 };


  return (
    <>
      <div className="min-h-screen bg-base-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/bills" className="inline-flex items-center mb-6">
            <FiArrowLeft /> Back
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            <img
              src={bill.image || "https://via.placeholder.com/400x300"}
              alt={bill.title}
              className="rounded-2xl shadow-lg object-cover w-full h-96"
            />

            <div>
              <h1 className="text-3xl font-bold mb-2">{bill.title}</h1>
              <p className="text-gray-600 mb-2 flex items-center gap-1">
                <FiMapPin /> {bill.location}
              </p>
              <p className="text-lg font-semibold mb-2 flex items-center gap-1">
                <FiDollarSign /> ৳{bill.amount?.toLocaleString()}
              </p>
              <p className="mb-2">{bill.description}</p>
              <p className="mt-2 flex items-center gap-1">
                <FiCalendar />{" "}
                {billDate.toLocaleDateString("en-BD", {
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <button
                onClick={handlePay}
                disabled={!isCurrentMonth}
                className={`btn w-full mt-5 ${
                  isCurrentMonth ? "btn-primary" : "btn-disabled"
                }`}
              >
                {isCurrentMonth ? "Pay Bill Now" : "Only Current Month Bills"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Complete Payment
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
              <input
                type="text"
                value={bill._id}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
              <input
                type="text"
                value={`৳${bill.amount}`}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
                className="textarea textarea-bordered w-full"
              />
              <input
                type="tel"
                placeholder="Phone (01XXXXXXXXX)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                pattern="[0-9]{11}"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Additional Info (optional)"
                value={formData.additionalInfo}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalInfo: e.target.value,
                  })
                }
                className="textarea textarea-bordered w-full"
              />
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-ghost flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  Confirm & Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
