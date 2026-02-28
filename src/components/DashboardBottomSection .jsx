
import { Play } from "lucide-react";
import React from "react";

const DashboardBottomSection = () => {

  const team = [
    {
      name: "Alexandra Deff",
      task: "Github Project Repository",
      status: "Completed",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Edwin Adenike",
      task: "Integrate User Authentication System",
      status: "In Progress",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Isaac Oluwatemilourun",
      task: "Develop Search and Filter Functionality",
      status: "Pending",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "David Oshodi",
      task: "Responsive Layout for Homepage",
      status: "In Progress",
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-6 mt-6">

      <div className="col-span-12 lg:col-span-6 bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Team Collaboration</h3>
          <button className="border px-3 py-1 rounded-full text-sm hover:bg-gray-100">
            + Add Member
          </button>
        </div>

        <div className="space-y-4">
          {team.map((m, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
                  {m.name[0]}
                </div>

                <div>
                  <h4 className="text-sm font-semibold">{m.name}</h4>
                  <p className="text-xs text-gray-500">
                    Working on <span className="font-medium">{m.task}</span>
                  </p>
                </div>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full ${m.color}`}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center">
        <h3 className="font-semibold text-lg mb-4 self-start ">
          Project Progress
        </h3>

        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-[10px] border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-[10px] border-[#1F7A57] border-t-transparent rotate-[220deg]"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">41%</span>
            <span className="text-xs text-gray-500">Project Ended</span>
          </div>
        </div>

        <div className="flex gap-4 text-xs text-gray-500 mt-4">
          <span className="flex items-center gap-1">
            <i className="w-2 h-2 bg-[#1F7A57] rounded-full"></i> Completed
          </span>
          <span className="flex items-center gap-1">
            <i className="w-2 h-2 bg-green-300 rounded-full"></i> In Progress
          </span>
          <span className="flex items-center gap-1">
            <i className="w-2 h-2 border border-dashed rounded-full"></i> Pending
          </span>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-3 bg-gradient-to-br from-[#0F3D2E] to-[#1F7A57] rounded-2xl p-5 text-white shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Time Tracker</h3>

        <div className="text-4xl font-bold tracking-wide mb-6">
          01:24:08
        </div>

        <div className="flex gap-4">
          <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            ❚❚
          </button>
          <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <Play width={22} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default DashboardBottomSection;