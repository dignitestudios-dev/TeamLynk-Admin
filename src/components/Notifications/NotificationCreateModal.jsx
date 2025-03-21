import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { ErrorToast, SuccessToast } from "../Globals/Toaster";

const NotificationCreateModal = ({ isOpen, setIsOpen, setUpdate }) => {
  const notificationCreateRef = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      await axios.post("/notifications", {
        title: formData.title,
        message: formData.message,
      });

      SuccessToast("Notification sent successfully");
      setFormData({ title: "", message: "" }); // Clear form
      setIsOpen(false); // Close modal
    } catch (error) {
      ErrorToast(error?.response?.data?.error || "Failed to send notification");
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = (e) => {
    if (!notificationCreateRef.current.contains(e.target)) {
      setIsOpen(false);
      setFormData({ title: "", message: "" }); // Clear form when closing
      setErrors({}); // Clear errors when closing
    }
  };

  return (
    <div
      onClick={(e) => toggleModal(e)}
      className={`w-screen h-screen flex p-2 items-center justify-center fixed top-0 left-0 z-[1000] transition-all duration-500 ${
        isOpen ? "scale-100 blur-none bg-black/50" : "scale-0 blur-md"
      }`}
    >
      <div
        ref={notificationCreateRef}
        className="w-[30rem] h-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md bg-white py-2 flex flex-col gap-2"
      >
        <div className="w-full border-b border-gray-200 h-12 flex items-center justify-center">
          <h1 className="text-xl font-bold">Send Notification</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full my-4 h-auto flex flex-col justify-start items-start px-4 gap-3"
        >
          <div className="w-full h-auto flex flex-col gap-[2px] justify-start items-start">
            <label className="text-sm font-medium text-gray-900">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. System Maintenance Notice"
              className={`w-full h-12 rounded-md px-4 outline-none focus:border-gray-300 border ${
                errors.title ? "border-red-500" : "border-gray-200"
              } text-sm`}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div className="w-full h-auto flex flex-col gap-[2px] justify-start items-start">
            <label className="text-sm font-medium text-gray-900">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your notification message here..."
              className={`w-full h-32 resize-none rounded-md p-3 outline-none focus:border-gray-300 border ${
                errors.message ? "border-red-500" : "border-gray-200"
              } text-sm`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-md flex justify-center items-center text-white font-medium bg-[#028EE6] hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Notification"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotificationCreateModal;
