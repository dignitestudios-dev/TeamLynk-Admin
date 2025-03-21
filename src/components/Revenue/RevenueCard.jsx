import React from "react";

const RevenueCard = ({ user, planName }) => {
  if (!user) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  function formatUSPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Check if the number has 10 digits
    if (cleaned.length >= 10) {
      const areaCode = cleaned.slice(0, 3);
      const centralOffice = cleaned.slice(3, 6);
      const lineNumber = cleaned.slice(6, 10);

      return `+1 (${areaCode})-${centralOffice}-${lineNumber}`;
    }
    // If the number isn't 10 digits, return the original input
    return phoneNumber;
  }

  return (
    <div className="border flex flex-col items-center gap-y-3 p-6 rounded-2xl">
      <div>
        <img
          src={
            user.avatar
              ? `https://api.teamlynk.net/${user.avatar}`
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          alt={user.name}
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <h2 className="font-medium">{user.name}</h2>
      <p className="text-sm text-slate-400">
        {formatUSPhoneNumber(user.phone_number)}
      </p>
      <div className="w-full flex justify-between items-center">
        <p className="text-slate-400 font-normal text-sm">Revenue</p>
        <p className="text-sm text-slate-400">{formatCurrency(user.revenue)}</p>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-slate-400 font-normal text-sm">Subscription taken</p>
        <p className="text-sm text-slate-400">
          {user.num_of_subscription} Times
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-slate-400 font-normal text-sm">Recent Transaction</p>
        <p className="text-sm text-slate-400">
          {formatCurrency(user.recent_transaction)}
        </p>
      </div>
      <div className="w-full">
        <button className="w-full text-sm rounded-lg py-2 bg-[#028EE6] text-white transition-all duration-300">
          {planName || "Basic"}
        </button>
      </div>
    </div>
  );
};

export default RevenueCard;
