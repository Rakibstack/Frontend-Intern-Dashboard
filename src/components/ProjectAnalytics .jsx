import React from "react";

const ProjectAnalytics = () => {
  const data = [
    { day: "S", height: 80, active: false },
    { day: "M", height: 120, active: true },
    { day: "T", height: 100, active: false },
    { day: "W", height: 150, active: true },
    { day: "T", height: 110, active: false },
    { day: "F", height: 90, active: false },
    { day: "S", height: 70, active: false },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Project Analytics
      </h3>

      {/* Chart */}
      <div className="flex items-end justify-between h-[180px]">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            {/* Bar wrapper */}
            <div className="flex items-end h-full">
              <div
                style={{ height: `${item.height}px` }}
                className={`
                  w-7 rounded-full transition-all duration-300
                  ${
                    item.active
                      ? "bg-[#1F7A57]"
                      : "border-2 border-dashed border-[#1F7A57]/40"
                  }
                `}
              ></div>
            </div>

            {/* Percentage (only active like design) */}
            {item.active && (
              <span className="text-xs text-[#1F7A57] font-semibold mt-1">
                74%
              </span>
            )}

            {/* Day */}
            <span className="text-sm text-gray-500 mt-1">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAnalytics;