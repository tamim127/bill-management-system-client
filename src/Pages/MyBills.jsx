import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import jsPDF from "jspdf";
import "jspdf-autotable";               // <-- keep this line

export default function MyPayBills() {
  const { user } = useAuth();
  const [bills, setBills] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedBill, setSelectedBill] = useState(null);
  const [formData, setFormData] = useState({
    amount: "",
    address: "",
    phone: "",
    date: "",
  });

  // ────────────────────── FETCH BILLS ──────────────────────
  const fetchBills = async () => {
    const res = await fetch(
      `http://localhost:3000/my-bills?email=${user?.email}`
    );
    const data = await res.json();
    setBills(data);
    const totalAmt = data.reduce((sum, b) => sum + (b.amount || 0), 0);
    setTotal(totalAmt);
  };

  useEffect(() => {
    if (user?.email) fetchBills();
  }, [user]);

  // ────────────────────── MODERN PDF (WORKS 100%) ──────────────────────
  const downloadPDF = () => {
    if (!bills || bills.length === 0) {
      toast.error("No bills found to download!");
      return;
    }

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // ---------- COLORS ----------
    const primary = [30, 144, 255];
    const dark    = [33, 37, 41];
    const light   = [248, 249, 250];

    // ---------- HEADER ----------
    doc.setFontSize(24);
    doc.setTextColor(...primary);
    doc.setFont("helvetica", "bold");
    doc.text("My Paid Bills", 20, 25);

    doc.setFontSize(12);
    doc.setTextColor(...dark);
    doc.setFont("helvetica", "normal");
    doc.text(`User: ${user?.displayName || user?.email}`, 20, 35);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 42);

    // ---------- SUMMARY ----------
    const summaryY = 52;
    doc.setFillColor(...light);
    doc.rect(20, summaryY, 170, 18, "F");
    doc.setFontSize(11);
    doc.setTextColor(...dark);
    doc.text(`Total Bills: ${bills.length}`, 25, summaryY + 8);
    doc.text(`Total Amount: ৳${total.toLocaleString()}`, 25, summaryY + 15);

    // ---------- TRY AUTOTABLE ----------
    let tableDrawn = false;
    try {
      doc.autoTable({
        head: [["Username", "Amount", "Date", "Phone"]],
        body: bills.map(b => [
          b.username || "N/A",
          `৳${Number(b.amount ?? 0).toLocaleString()}`,
          new Date(b.createdAt).toLocaleDateString("en-GB"),
          b.phone || "N/A",
        ]),
        startY: summaryY + 28,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 4 },
        headStyles: { fillColor: primary, textColor: 255, fontStyle: "bold", halign: "center" },
        columnStyles: {
          0: { cellWidth: 45 },
          1: { cellWidth: 35, halign: "right" },
          2: { cellWidth: 35, halign: "center" },
          3: { cellWidth: 45 },
        },
        alternateRowStyles: { fillColor: [245, 247, 250] },
        pageBreak: "auto",
        didDrawPage: data => {
          const h = doc.internal.pageSize.height;
          doc.setFontSize(9);
          doc.setTextColor(150);
          doc.text(`Page ${data.pageNumber} | Bill Manager`, 20, h - 10);
        },
      });
      tableDrawn = true;
    } catch (e) {
      console.warn("autoTable not available – using fallback", e);
    }

    // ---------- FALLBACK MANUAL TABLE ----------
    if (!tableDrawn) {
      let y = summaryY + 28;
      const line = 7;
      const cols = [50, 30, 35, 45]; // widths

      // header
      doc.setFont("helvetica", "bold");
      doc.text("Username", 20, y);
      doc.text("Amount", 20 + cols[0], y);
      doc.text("Date", 20 + cols[0] + cols[1], y);
      doc.text("Phone", 20 + cols[0] + cols[1] + cols[2], y);
      y += line;
      doc.setFont("helvetica", "normal");

      // rows
      bills.forEach(b => {
        doc.text(b.username || "N/A", 20, y);
        doc.text(`৳${Number(b.amount ?? 0).toLocaleString()}`, 20 + cols[0], y);
        doc.text(new Date(b.createdAt).toLocaleDateString("en-GB"), 20 + cols[0] + cols[1], y);
        doc.text(b.phone || "N/A", 20 + cols[0] + cols[1] + cols[2], y);
        y += line;
      });
    }

    // ---------- SAVE ----------
    const fileName = `MyPayBills_${new Date().toISOString().slice(0, 10)}.pdf`;
    doc.save(fileName);
    toast.success("PDF downloaded successfully!");
  };

  // ────────────────────── UPDATE / DELETE (unchanged) ──────────────────────
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3000/my-bills/${selectedBill._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    if (res.ok) {
      toast.success("Bill updated successfully!");
      setSelectedBill(null);
      fetchBills();
    } else {
      toast.error("Failed to update bill");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this bill?")) {
      const res = await fetch(`http://localhost:3000/my-bills/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Bill deleted!");
        fetchBills();
      }
    }
  };

  // ────────────────────── UI (unchanged) ──────────────────────
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="stats shadow mb-6 w-full">
        <div className="stat">
          <div className="stat-title">Total Bills Paid</div>
          <div className="stat-value text-primary">{bills.length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Amount</div>
          <div className="stat-value text-success">৳{total}</div>
        </div>
      </div>

      <button onClick={downloadPDF} className="btn btn-primary mb-6">
        Download PDF Report
      </button>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((b) => (
              <tr key={b._id}>
                <td>{b.username}</td>
                <td>{b.email}</td>
                <td>৳{b.amount}</td>
                <td>{new Date(b.createdAt).toLocaleDateString()}</td>
                <td>{b.phone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning mr-2"
                    onClick={() => {
                      setSelectedBill(b);
                      setFormData({
                        amount: b.amount,
                        address: b.address,
                        phone: b.phone,
                        date: new Date(b.createdAt)
                          .toISOString()
                          .substring(0, 10),
                      });
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal – unchanged */}
      {selectedBill && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Update Bill Info
            </h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: Number(e.target.value) })
                }
                className="input input-bordered w-full"
                required
              />
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
              <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <div className="flex gap-3 mt-4">
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
          </div>
        </div>
      )}
    </div>
  );
}