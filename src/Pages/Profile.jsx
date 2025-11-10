import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Edit3, Mail, Phone, MapPin, Calendar, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";

export default function Profile() {
  const { user, logout } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
    address: "",
    photoURL: user?.photoURL || "/default-avatar.png",
  });

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Gradient Header */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Avatar */}
          <div className="relative px-6 -mt-16">
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src={profileData.photoURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-xl object-cover"
                />
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg opacity-100 transition-opacity"
                >
                  <Edit3 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Name & Email */}
          <div className="px-6 pt-6 pb-4 text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {profileData.displayName || "User"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {profileData.email}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 px-6 py-4 bg-gray-50 dark:bg-gray-700">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                12
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Paid Bills
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                ৳24,500
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Total Paid
              </p>
            </div>
          </div>

          {/* Info List */}
          <div className="px-6 py-4 space-y-3">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span className="text-sm">{profileData.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="text-sm">{profileData.phone || "Not set"}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span className="text-sm">
                {profileData.address || "Dhaka, Bangladesh"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5 text-pink-500" />
              <span className="text-sm">Member since 2025</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 flex gap-3">
            <Link
              to="/my-pay-bills"
              className="flex-1 btn btn-primary rounded-xl"
            >
              My Bills
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 btn btn-ghost text-red-500 border border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* App Version */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          Utility Bill Manager v1.0.0
        </p>
      </div>

      {/* Edit Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profileData={profileData}
        setProfileData={setProfileData}
      />
    </div>
  );
}
