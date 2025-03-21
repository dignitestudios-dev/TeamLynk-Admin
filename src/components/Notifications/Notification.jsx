import React, { useEffect, useState, useCallback } from "react";
// import { Notification } from "../assets/export";
import { IoSearchOutline } from "react-icons/io5";
import NotificationCreateModal from "./NotificationCreateModal";
import { NotificationBell } from "../../assets/export";
import axios from "../../axios";
import { ErrorToast } from "../Globals/Toaster";
import Pagination from "../Globals/Pagination";
// import NotificationCreateModal from "../components/notifications/NotificationCreateModal";

const Notification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [paginationLinks, setPaginationLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);

  const fetchNotifications = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/notifications?search=${searchTerm}&page=${currentPage}`
      );
      setNotifications(response.data?.data || []);
      setPaginationLinks(response.data?.links || []);
    } catch (error) {
      ErrorToast(
        error?.response?.data?.error || "Failed to fetch notifications"
      );
    } finally {
      setLoading(false);
    }
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId;
      return (searchTerm) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setCurrentPage(1); // Reset to first page when searching
          fetchNotifications(searchTerm);
        }, 500); // 500ms delay
      };
    })(),
    [currentPage]
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    debouncedSearch(searchTerm);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!search) {
      // Only fetch if not triggered by search
      fetchNotifications(search);
    }
  }, [currentPage, update]); // Remove search from dependencies since we handle it in debouncedSearch

  return (
    <div className="w-full flex flex-col justify-start items-start gap-6">
      <div className="w-full h-auto flex justify-between items-center">
        <div className="w-96 relative">
          <input
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={handleSearchChange}
            className="w-full text-sm h-10 rounded-md pl-10 pr-3 outline-none border border-gray-200 text-gray-700"
          />
          <IoSearchOutline className="text-xl text-gray-400 absolute left-3 top-2.5" />
        </div>
        <button
          onClick={() => setIsNotificationOpen(true)}
          className="w-32 h-10 rounded-md bg-[#028EE6] text-white text-sm font-medium"
        >
          Send New
        </button>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="w-full text-center py-8">
          <p className="text-gray-500">No notifications found</p>
        </div>
      ) : (
        <div className="w-full h-auto grid grid-cols-1 gap-4 lg:grid-cols-2">
          {notifications.map((notification, index) => (
            <div
              key={notification.id || index}
              className="flex rounded-md border border-gray-200 p-4 text-left text-gray-600 sm:p-4"
            >
              <img
                className="mr-2 block h-16 w-16 max-w-full text-left align-middle sm:h-20 sm:w-20"
                src={NotificationBell}
                alt="Notification Icon"
              />
              <div className="w-full text-left">
                <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row pt-2">
                  <h3 className="font-medium">
                    {notification.title || "Untitled"}
                  </h3>
                  <time className="text-xs">
                    {notification.created_at
                      ? new Date(notification.created_at).toLocaleString()
                      : "Date not available"}
                  </time>
                </div>
                <p className="text-sm">
                  {notification.body || "No message content"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && notifications.length > 0 && (
        <div className="w-full">
          <Pagination links={paginationLinks} onPageChange={handlePageChange} />
        </div>
      )}

      <NotificationCreateModal
        isOpen={isNotificationOpen}
        setIsOpen={setIsNotificationOpen}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default Notification;
