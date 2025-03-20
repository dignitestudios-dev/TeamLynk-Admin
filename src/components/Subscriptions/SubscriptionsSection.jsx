import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import { styles } from "../../styles/styles";

const SubscriptionsSection = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SubscriptionCard type={"Basic"} rate={"10"} />
        <SubscriptionCard type={"Standard"} rate={"50"} />
        <SubscriptionCard type={"Premium"} rate={"100"} />
      </div>
    </div>
  );
};

export default SubscriptionsSection;
