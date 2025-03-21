import React from "react";
import SummaryCard from "./SummaryCard";
import { summary } from "../../constants/DashboardSummary";

const Summary = () => {
  return (
    <div className="w-full flex flex-col gap-6 lg:pr-60">
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-6">
        {summary.map((summary, index) => {
          return <SummaryCard key={index} summary={summary} />;
        })}
      </div>
    </div>
  );
};

export default Summary;
