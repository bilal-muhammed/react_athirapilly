import React from "react";
import handleChat from "../assets/utils/redirection";

const Search = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Left Content */}
        <div className="md:col-span-2">
          <h3 className="text-2xl md:text-3xl font-bold text-[#44b50c] mb-4">
            ATHIRAPILLY'S ULTIMATE JUNGLE EXPERIENCE
          </h3>
          <p className="mb-8 text-gray-700 text-lg">
            Let the roar of waterfalls be your morning alarm. Spend days exploring
            emerald green trails and evenings watching fireflies dance.
            Athirapilly isn't just a destination - it's where you'll find your
            most authentic connection with nature's magic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Things to Do Section */}
            <div className="flex-1 p-6 bg-white rounded-xl border border-[#e5f5dc] hover:border-[#44b50c] transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#44b50c] p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-800">
                  Explore Athirapilly
                </h4>
              </div>
              <p className="text-gray-700">
                Discover breathtaking waterfalls, serene lakes, and rich heritage
                sites. Enjoy thrilling activities like trekking, wildlife safaris,
                and boating—all in one unforgettable experience.
              </p>
            </div>

            {/* Booking Section */}
            <div className="flex-1 p-6 bg-gradient-to-br from-[#f0f9e8] to-[#e5f5dc] rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#44b50c] p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-800">
                  Hassle-Free Booking
                </h4>
              </div>
              <p className="text-gray-700 mb-4">
                Secure your Athirapilly tour instantly with real-time
                availability. Flexible options, easy cancellations, and 24/7
                support.
              </p>
              <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white px-5 py-3 rounded-lg font-medium transition shadow-md hover:shadow-sm" onClick={e=>handleChat()}>
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Discount Banner */}
          <div className="border-2 border-[#44b50c] p-4 text-center rounded-xl bg-[#f8fdf5]">
            <p className="text-[#44b50c] font-bold">GET AN ADDITIONAL 10% OFF</p>
            <p className="my-2 text-gray-600">12 hours left</p>
            <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white py-2 rounded-lg font-medium transition" onClick={e=>handleChat()}>
              BOOK NOW AND SAVE
            </button>
          </div>

          {/* Search Form */}
          <form className="bg-white p-6 rounded-xl border border-[#e5f5dc] shadow-sm">
            <h4 className="text-lg font-bold text-[#44b50c] mb-4">Plan Your Trip</h4>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Activity</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
              >
                <option value="">Select an activity</option>
                <option value="waterfalls">Waterfalls Tour</option>
                <option value="trekking">Jungle Trekking</option>
                <option value="safari">Wildlife Safari</option>
                <option value="boating">River Boating</option>
                <option value="camping">Night Camping</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">Check-In</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-1">Check-Out</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#44b50c] focus:border-[#44b50c]"
              />
            </div>

            <button className="w-full bg-[#44b50c] hover:bg-[#3a9a0a] text-white py-3 rounded-lg font-medium transition shadow-md hover:shadow-sm">
              Check Availability
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;