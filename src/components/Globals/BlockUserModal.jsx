import React, { useState } from "react";
import Modal from "react-modal";
import axios from "../../axios";
import { SuccessToast, ErrorToast } from "./Toaster";

// Bind modal to your appElement for accessibility
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    background: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const BlockUserModal = ({ isOpen, onClose, user, onSuccess }) => {
  const [isActionLoading, setIsActionLoading] = useState(false);

  const handleAction = async () => {
    try {
      setIsActionLoading(true);
      const response = await axios.get(`/users/${user?.uid}/block`);

      SuccessToast(
        response.data?.message ||
          `User successfully ${user?.is_blocked ? "unblocked" : "blocked"}`
      );
      onSuccess();
      onClose();
    } catch (error) {
      ErrorToast(
        error?.response?.data?.error ||
          `Failed to ${user?.is_blocked ? "unblock" : "block"} user`
      );
    } finally {
      setIsActionLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Block User Modal"
      overlayClassName=" w-screen h-screen fixed top-0 left-0 z-[2000] flex items-center justify-center"
    >
      <div className="bg-white rounded-lg shadow-xl p-6 min-w-[400px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.is_blocked ? "Unblock" : "Block"} User
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="text-gray-600">
            Are you sure you want to {user?.is_blocked ? "unblock" : "block"}{" "}
            <span className="font-semibold">{user?.name || "this user"}</span>?
            {!user?.is_blocked &&
              " This will prevent them from accessing the platform."}
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={onClose}
              disabled={isActionLoading}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleAction}
              disabled={isActionLoading}
              className={`px-4 py-2 rounded-md text-white font-medium flex items-center justify-center min-w-[100px] ${
                user?.is_blocked
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              } ${isActionLoading ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              {isActionLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {user?.is_blocked ? "Unblocking..." : "Blocking..."}
                </div>
              ) : user?.is_blocked ? (
                "Unblock"
              ) : (
                "Block"
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BlockUserModal;
