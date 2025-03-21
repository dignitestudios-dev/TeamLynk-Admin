import React, { useEffect, useState } from "react";
import RevenueCard from "../components/Revenue/RevenueCard";
import Filter from "../components/Revenue/Filter";
import Pagination from "../components/Globals/Pagination";
import axios from "../axios";
import { ErrorToast } from "../components/Globals/Toaster";
import { useLocation, useParams } from "react-router-dom";

const LoadingSkeleton = () => (
  <div className="animate-pulse border flex flex-col items-center gap-y-3 p-6 rounded-2xl">
    <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
    <div className="h-4 w-24 bg-gray-200 rounded"></div>
    <div className="h-3 w-32 bg-gray-200 rounded"></div>
    <div className="w-full flex justify-between items-center">
      <div className="h-3 w-16 bg-gray-200 rounded"></div>
      <div className="h-3 w-12 bg-gray-200 rounded"></div>
    </div>
    <div className="w-full flex justify-between items-center">
      <div className="h-3 w-24 bg-gray-200 rounded"></div>
      <div className="h-3 w-16 bg-gray-200 rounded"></div>
    </div>
    <div className="w-full flex justify-between items-center">
      <div className="h-3 w-20 bg-gray-200 rounded"></div>
      <div className="h-3 w-14 bg-gray-200 rounded"></div>
    </div>
    <div className="w-full">
      <div className="w-full h-8 bg-gray-200 rounded-lg"></div>
    </div>
  </div>
);

const Revenue = () => {
  const { id } = useParams();
  const location = useLocation();
  const plan = location.state;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationLinks, setPaginationLinks] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    status: "active",
    page: 1,
  });

  const fetchPlanDetails = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `/subscriptions/${id}?status=${filters?.status}&search=${filters?.search}`
      );
      console.log(response);
      setData(response.data.data || []);
      setPaginationLinks(response.data.links || []);
    } catch (error) {
      ErrorToast(
        error?.response?.data?.error || "Failed to fetch subscription plans"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFilters = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
      page: 1, // Reset page when filters change
    }));
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  useEffect(() => {
    fetchPlanDetails();
  }, [filters]);

  return (
    <div className="flex flex-col gap-8">
      <Filter
        filters={filters}
        onSearch={(value) => handleFilters("search", value)}
        onStatusChange={(value) => handleFilters("status", value)}
        onReset={() => {
          setFilters({
            search: "",
            status: "all",
            page: 1,
          });
        }}
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
      ) : data.length === 0 ? (
        <div className="w-full flex justify-center items-center py-8">
          <p className="text-gray-500">No subscribers found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((user) => (
              <RevenueCard key={user.id} user={user} planName={plan?.name} />
            ))}
          </div>
          <Pagination links={paginationLinks} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default Revenue;
