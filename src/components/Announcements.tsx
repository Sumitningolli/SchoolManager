"use client";

import Image from "next/image";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-600">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Upcoming Team Meeting</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-700 mt-2">
            A team meeting is scheduled to discuss project updates and future
            plans. Make sure to join on time.
          </p>
        </div>
        <div className="bg-lamaPurple rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">System Maintenance Alert</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-700 mt-2">
            The system will be undergoing maintenance from 12:00 AM to 3:00 AM.
            Please save your work before this time.
          </p>
        </div>
        <div className="bg-lamaYellow rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Weekend Workshop Registration</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-700 mt-2">
            Register now for our upcoming weekend workshop on new technologies
            and skills development.
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default Announcements;
