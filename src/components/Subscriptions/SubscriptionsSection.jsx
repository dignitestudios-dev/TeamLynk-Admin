import React, { useState, useEffect } from "react";
import SubscriptionCard from "./SubscriptionCard";
import { styles } from "../../styles/styles";
import axios from "../../axios";
import { ErrorToast } from "../Globals/Toaster";

const SubscriptionsSection = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/plans");
      setPlans(response.data || []);
    } catch (error) {
      ErrorToast(
        error?.response?.data?.error || "Failed to fetch subscription plans"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="w-full py-4 flex flex-col gap-y-6">
      <div className="w-full flex items-center justify-between">
        <h1 className={`text-xl font-extrabold ${styles.blueText}`}>
          Subscriptions
        </h1>
        <button
          className={`${styles.blueBg} text-white text-sm font-medium px-4 py-3 rounded-md`}
        >
          Download Report
        </button>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1  gap-6">
          {plans.map((plan) => (
            <SubscriptionCard key={plan.id} plan={plan} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubscriptionsSection;
