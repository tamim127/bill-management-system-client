import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { X, Camera } from "lucide-react";
import toast from "react-hot-toast";

export default function EditProfileModal({
  isOpen,
  onClose,
  profileData,
  setProfileData,
}) {
  const [form, setForm] = useState({
    displayName: profileData.displayName || "",
    phone: profileData.phone || "",
    address: profileData.address || "",
  });
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!form.displayName.trim()) {
      toast.error("Name is required!");
      return;
    }

    setLoading(true);
    try {
      // 
      await updateProfile(auth.currentUser, {
        displayName: form.displayName,
      });

      // 
      setProfileData((prev) => ({
        ...prev,
        displayName: form.displayName,
        phone: form.phone,
        address: form.address,
      }));

      toast.success("Profile updated successfully!");
      onClose();
    } catch (err) {
      toast.error("Failed to update profile.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Edit Profile
          </h2>
          <button onClick={onClose} className="text-gray-500 text-gray-700 ">
            <X className="w-5 dark:text-gray-300 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={form.displayName}
              onChange={(e) =>
                setForm({ ...form, displayName: e.target.value })
              }
              className="input dark:text-gray-300 input-bordered w-full"
              placeholder="John Doe"
              disabled={loading}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="input dark:text-gray-300 input-bordered w-full"
              placeholder="+880 1XXX-XXXXXX"
              disabled={loading}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Address
            </label>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="input dark:text-gray-300 input-bordered w-full"
              placeholder="Dhaka, Bangladesh"
              disabled={loading}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 dark:text-gray-300 btn btn-ghost"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 btn btn-primary"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
