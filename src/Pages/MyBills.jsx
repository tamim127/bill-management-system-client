import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import jsPDF from "jspdf";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "jspdf-autotable";
import { Edit2, Trash2, Download, Loader2, AlertCircle } from "lucide-react";

export default function MyPayBills() {
  const { user } = useAuth();
  const [bills, setBills] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const [formData, setFormData] = useState({
    amount: "",
    address: "",
    phone: "",
    date: "",
  });

  //  FETCH BILLS 
  const fetchBills = async () => {
    if (!user?.email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://bill-management-system-servers.vercel.app/my-bills?email=${user.email}`
      );
      if (!res.ok) throw new Error("Failed to fetch bills");
      const data = await res.json();
      setBills(data);
      const totalAmt = data.reduce(
        (sum, b) => sum + (Number(b.amount) || 0),
        0
      );
      setTotal(totalAmt);
    } catch (err) {
      setError(err.message);
      toast.error("Failed to load bills");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills();
  }, [user]);

  //  PDF DOWNLOAD 
  const downloadPDF = () => {
    if (!bills.length) {
      toast.error("No bills to download!");
      return;
    }

    const doc = new jsPDF();
    const primary = [30, 144, 255];
    const dark = [33, 37, 41];
    const light = [248, 249, 250];

    // Header
    doc.setFontSize(28);
    doc.setTextColor(...primary);
    doc.setFont("helvetica", "bold");
    doc.text("My Paid Bills Report", 20, 30);

    doc.setFontSize(12);
    doc.setTextColor(...dark);
    doc.text(`User: ${user?.displayName || user?.email}`, 20, 40);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 47);

    // Summary Box
    doc.setFillColor(...light);
    doc.roundedRect(20, 55, 170, 20, 3, 3, "F");
    doc.setFontSize(11);
    doc.text(`Total Bills: ${bills.length}`, 28, 63);
    doc.text(`Total Amount: ৳${total.toLocaleString()}`, 28, 70);

    // Table
    try {
      doc.autoTable({
        head: [["Username", "Amount", "Date", "Phone"]],
        body: bills.map((b) => [
          b.username || "N/A",
          `৳${Number(b.amount || 0).toLocaleString()}`,
          new Date(b.createdAt).toLocaleDateString("en-GB"),
          b.phone || "N/A",
        ]),
        startY: 85,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 5 },
        headStyles: { fillColor: primary, textColor: 255, fontStyle: "bold" },
        columnStyles: {
          0: { cellWidth: 45 },
          1: { cellWidth: 40, halign: "right" },
          2: { cellWidth: 40, halign: "center" },
          3: { cellWidth: 45 },
        },
        alternateRowStyles: { fillColor: [245, 247, 250] },
      });
    } catch (e) {
      console.warn("AutoTable failed, using fallback");
    }

    doc.save(`MyBills_${new Date().toISOString().slice(0, 10)}.pdf`);
    toast.success("PDF downloaded!");
  };

  //  UPDATE BILL 
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://bill-management-system-servers.vercel.app/my-bills/${selectedBill._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: Number(formData.amount), // Ensure number
            address: formData.address,
            phone: formData.phone,
            date: formData.date, // Keep as string (YYYY-MM-DD)
          }),
        }
      );

      if (res.ok) {
        toast.success("Bill updated successfully!");
        setSelectedBill(null);
        setFormData({ amount: "", address: "", phone: "", date: "" }); // Reset
        fetchBills();
      } else {
        const error = await res.text();
        toast.error("Update failed: " + error);
      }
    } catch (err) {
      toast.error("Network error");
    }
  };
  //  DELETE BILL 
 const handleDelete = async (id) => {
   
   Swal.fire({
     title: "Are you sure?",
     text: "This bill will be permanently deleted!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!",
   }).then(async (result) => {
     if (result.isConfirmed) {
       try {
         const res = await fetch(
           `https://bill-management-system-servers.vercel.app/my-bills/${id}`,
           {
             method: "DELETE",
           }
         );
         const data = await res.json();

         if (data.success) {
           Swal.fire({
             title: "Deleted!",
             text: "Your bill has been deleted.",
             icon: "success",
             timer: 2000,
             showConfirmButton: false,
           });

           
          setBills(bills.filter(bill => bill._id !== id));
         } else {
           Swal.fire(
             "Failed!",
             data.message || "Could not delete the bill.",
             "error"
           );
         }
       } catch (error) {
         Swal.fire("Error!", "Something went wrong while deleting.", "error");
       }
     }
   });
 };


  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-base-100 dark:bg-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-2">
              My Paid Bills
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Track, update, and export your utility payments
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="stats shadow bg-white dark:bg-gray-800">
              <div className="stat">
                <div className="stat-title">Total Bills</div>
                <div className="stat-value text-primary">{bills.length}</div>
              </div>
            </div>
            <div className="stats shadow bg-white dark:bg-gray-800">
              <div className="stat">
                <div className="stat-title">Total Paid</div>
                <div className="stat-value text-success">
                  ${total.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={downloadPDF}
              disabled={loading || !bills.length}
              className="btn btn-primary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <button
              onClick={fetchBills}
              disabled={loading}
              className="btn btn-ghost  dark:bg-gray-600 flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Refresh"
              )}
            </button>
          </div>

          {/* States */}
          {loading && (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="alert alert-error shadow-lg mb-6">
              <AlertCircle className="w-6 h-6" />
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && bills.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 mx-auto mb-4" />
              <p className="text-xl text-gray-500">No bills paid yet</p>
              <p className="text-sm text-gray-400 mt-2">
                Pay your first bill to see it here
              </p>
            </div>
          )}

          {/* Table */}
          {!loading && !error && bills.length > 0 && (
            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <table className="table table-zebra w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Phone</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((b) => (
                    <tr
                      key={b._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="font-medium  dark:text-gray-400">
                        {b.username || "—"}
                      </td>
                      <td className=" dark:text-gray-400">{b.email}</td>
                      <td className="font-semibold text-success">
                        $ {Number(b.amount).toLocaleString()}
                      </td>
                      <td className=" dark:text-gray-400">
                        {new Date(b.createdAt).toLocaleDateString("en-GB")}
                      </td>
                      <td className=" dark:text-gray-400">{b.phone || "—"}</td>
                      <td>
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedBill(b);
                              setFormData({
                                amount: Number(b.amount) || 0, // Convert to number
                                address: b.address || "",
                                phone: b.phone || "",
                                date: new Date(b.createdAt)
                                  .toISOString()
                                  .slice(0, 10), // YYYY-MM-DD
                              });
                            }}
                            className="btn btn-sm btn-warning flex items-center gap-1"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(b._id)}
                            className="btn btn-sm btn-error flex items-center gap-1"
                            aria-label="Delete bill"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Update Modal */}

      {selectedBill && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-5 text-center text-primary">
              Update Bill
            </h2>
            <form
              onSubmit={handleUpdate}
              className="space-y-4  dark:text-gray-400"
            >
              {/* Amount – Fixed: Convert to Number */}
              <input
                type="number"
                placeholder="Amount (৳)"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: Number(e.target.value) || "",
                  })
                }
                className="input input-bordered w-full"
                required
                min="0"
                step="1"
              />

              {/* Address */}
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />

              {/* Date – Fixed: Ensure valid date */}
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedBill(null)}
                  className="btn btn-ghost flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary flex-1">
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
