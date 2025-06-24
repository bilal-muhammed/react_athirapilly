import React, { useState } from "react";

const BookingTabs = () => {
  const [activeTab, setActiveTab] = useState("hotel");

  const tabClass = (tab) =>
    `px-6 py-3 font-medium text-sm sm:text-base rounded-t-lg transition-all ${
      activeTab === tab
        ? "bg-white text-[#44b50c] border-t-2 border-l-2 border-r-2 border-[#e5f5dc]"
        : "text-gray-600 hover:text-[#44b50c] bg-[#f0f9e8]"
    }`;

  return (
    <div className="bg-white rounded-xl shadow-lg max-w-4xl w-[90%] mx-auto p-6 mt-8 border border-[#e5f5dc]">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-1 mb-6">
        <button
          onClick={() => setActiveTab("hotel")}
          className={`${tabClass("hotel")} flex items-center gap-2`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Hotels
        </button>
        <button
          onClick={() => setActiveTab("tour")}
          className={`${tabClass("tour")} flex items-center gap-2`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tour Plans
        </button>
        <button
          onClick={() => setActiveTab("vehicle")}
          className={`${tabClass("vehicle")} flex items-center gap-2`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Vehicles
        </button>
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300 ease-in-out">
        {activeTab === "hotel" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-b-lg rounded-tr-lg border border-[#e5f5dc]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <input
                  type="text"
                  placeholder="Where do you want to stay?"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
              </div>
              <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-sm mt-6">
                Search Hotels
              </button>
            </div>
          </form>
        )}

        {activeTab === "tour" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-b-lg rounded-tr-lg border border-[#e5f5dc]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tour Destination</label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]">
                  <option value="">Select a tour package</option>
                  <option value="waterfalls">Waterfalls Experience</option>
                  <option value="wildlife">Wildlife Safari</option>
                  <option value="cultural">Cultural Tour</option>
                  <option value="adventure">Adventure Package</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tour Date</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Persons</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                <textarea
                  placeholder="Any special requests?"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c] h-[120px]"
                ></textarea>
              </div>
              <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-sm">
                Find Tour Packages
              </button>
            </div>
          </form>
        )}

        {activeTab === "vehicle" && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-b-lg rounded-tr-lg border border-[#e5f5dc]">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                <input
                  type="text"
                  placeholder="Enter pickup address"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
                  <input
                    type="date"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]">
                  <option value="">Select vehicle type</option>
                  <option value="sedan">Sedan (4 seats)</option>
                  <option value="suv">SUV (7 seats)</option>
                  <option value="van">Van (12 seats)</option>
                  <option value="bus">Mini Bus (18 seats)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                <input
                  type="number"
                  placeholder="Number of passengers"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
                />
              </div>
              <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-sm">
                Check Vehicle Availability
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingTabs;