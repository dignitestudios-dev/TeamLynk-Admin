import React from "react";

const SummaryCard = ({ summary }) => {
  return (
    <div className="h-[187px] border rounded-xl p-6 flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="font-bold text-lg">{summary?.title}</p>
          <p className="uppercase font-medium text-[#5C5F6A] text-xs">
            {summary?.timing}
          </p>
        </div>
        {summary?.title == "Total Revenue" && (
          <p className="text-lg font-bold">${summary?.count}</p>
        )}
      </div>
      {summary?.title == "Total Revenue" && (
        <img
          src={summary?.image}
          alt=""
          className="object-scale-down scale-150"
        />
      )}
      {summary?.title == "Total Sales" && <img src={summary?.image} alt="" />}

      {summary?.title == "Users" && (
        <>
          <div className="w-full flex flex-col justify-start items-start gap-[2px]">
            <h1 className="text-gray-700 tracking-wider text-xs">
              Individual plan
            </h1>
            <span className="w-full h-[6px] bg-[#E0E0E0] flex items-start justify-start rounded-full">
              <span className="w-[50%] h-full bg-[#028EE6] rounded-full"></span>
            </span>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[2px]">
            <h1 className="text-gray-700 tracking-wider text-xs">
              Family plan
            </h1>
            <span className="w-full h-[6px] bg-[#E0E0E0] flex items-start justify-start rounded-full">
              <span className="w-[50%] h-full bg-[#028EE6] rounded-full"></span>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryCard;
