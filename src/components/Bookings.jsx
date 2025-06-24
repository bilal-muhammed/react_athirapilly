import React from 'react';

const bookings = [
  {
    id: 'BK001',
    type: 'Hotel',
    name: 'Rainforest Boutique Resort',
    date: '15 Oct 2023 - 18 Oct 2023',
    status: 'Confirmed',
    price: '₹17,997',
    details: 'Deluxe Room - 3 Nights'
  },
  {
    id: 'BK002',
    type: 'Tour',
    name: 'Athirappilly – Vazhachal Combo',
    date: '20 Oct 2023',
    status: 'Completed',
    price: '₹2,799',
    details: 'Group Tour - 1 Day'
  },
  {
    id: 'BK003',
    type: 'Vehicle',
    name: 'SUV Rental',
    date: '22 Oct 2023 - 25 Oct 2023',
    status: 'Cancelled',
    price: '₹7,500',
    details: 'Toyota Fortuner - 3 Days'
  },
];

const statusColors = {
  'Confirmed': 'bg-green-100 text-green-800',
  'Completed': 'bg-blue-100 text-blue-800',
  'Cancelled': 'bg-red-100 text-red-800'
};

const MyBookings = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-10 sm:px-10 pt-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#44b50c] mb-8 mt-10">
          My Bookings
        </h1>
        
        {/* Filter Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-4 py-2 rounded-full bg-[#44b50c] text-white">
            All Bookings
          </button>
          <button className="px-4 py-2 rounded-full border border-[#44b50c] text-[#44b50c]">
            Hotels
          </button>
          <button className="px-4 py-2 rounded-full border border-[#44b50c] text-[#44b50c]">
            Tours
          </button>
          <button className="px-4 py-2 rounded-full border border-[#44b50c] text-[#44b50c]">
            Vehicles
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow border border-[#e5f5dc] p-6 hover:shadow-md transition hover:border-[#44b50c]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                    <span className="text-xs text-gray-500">#{booking.id}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-[#44b50c]">{booking.name}</h2>
                  <p className="text-gray-700">{booking.details}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="font-medium">Dates:</span> {booking.date}
                  </p>
                </div>
                
                <div className="flex flex-col items-end">
                  <p className="text-lg font-bold text-[#44b50c]">{booking.price}</p>
                  <div className="flex gap-2 mt-4">
                    <button className="px-3 py-1 text-sm border border-[#44b50c] text-[#44b50c] rounded hover:bg-[#44b50c] hover:text-white transition">
                      View Details
                    </button>
                    {booking.status === 'Confirmed' && (
                      <button className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">No bookings yet</h3>
            <p className="text-gray-500 mb-4">Your upcoming bookings will appear here</p>
            <button className="px-6 py-2 bg-[#44b50c] text-white rounded hover:bg-[#3a9a0a] transition">
              Explore Packages
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;