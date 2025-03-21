import React, { useState, useEffect, useCallback } from "react";
import { styles } from "../styles/styles";
import Filter from "../components/Users/Filter";
import UserList from "../components/Users/UserList";
import BlockUserModal from "../components/Globals/BlockUserModal";
import Pagination from "../components/Globals/Pagination";
import axios from "../axios";
import { ErrorToast } from "../components/Globals/Toaster";
import { debounce, filter } from "lodash";

const Users = () => {
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationLinks, setPaginationLinks] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    status: "all", // All, Blocked, Unblocked
    page: 1,
  });

  // Fetch users with filters
  const fetchUsers = async () => {
    try {
      setLoading(true);

      // Add pagination

      const response = await axios.get(
        `/users?search=${filters?.search}&status=${filters?.status}&page=${filters?.page}`
      );
      setUsers(response.data.data || []);
      // Store pagination links
      setPaginationLinks(response.data.links || []);
    } catch (error) {
      ErrorToast(error?.response?.data?.error || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // Debounced version of fetchUsers
  const debouncedFetchUsers = useCallback(
    debounce(() => {
      fetchUsers();
    }, 500),
    [] // Empty dependency array since we don't want to recreate the debounced function
  );

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      page: 1, // Reset page when filters change
    }));
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  // Handle search with debouncing
  const handleSearch = (searchTerm) => {
    setFilters((prev) => ({
      ...prev,
      search: searchTerm,
      page: 1, // Reset page when search changes
    }));
  };

  // Handle status filter
  const handleStatusFilter = (status) => {
    setFilters((prev) => ({
      ...prev,
      status,
      page: 1, // Reset page when status changes
    }));
  };

  // Block user handlers
  const handleBlockClick = (user) => {
    setSelectedUser(user);
    setIsBlockModalOpen(true);
  };

  const handleModalClose = () => {
    setIsBlockModalOpen(false);
    setSelectedUser(null);
  };

  const handleBlockSuccess = () => {
    fetchUsers(); // Refresh the user list
  };

  // Use debounced fetch when filters change
  useEffect(() => {
    if (filters.search) {
      debouncedFetchUsers();
      // Cleanup the debounced function
      return () => debouncedFetchUsers.cancel();
    } else {
      // For non-search filter changes, fetch immediately
      fetchUsers();
    }
  }, [filters, debouncedFetchUsers]);

  return (
    <div className="w-full flex flex-col gap-y-4">
      <Filter
        filters={filters}
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
      />
      {loading ? (
        <div className="w-full flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <UserList
          users={users}
          loading={loading}
          onBlockClick={handleBlockClick}
        />
      )}

      {!loading && (
        <Pagination links={paginationLinks} onPageChange={handlePageChange} />
      )}

      <BlockUserModal
        isOpen={isBlockModalOpen}
        onClose={handleModalClose}
        user={selectedUser}
        onSuccess={handleBlockSuccess}
      />
    </div>
  );
};

export default Users;
