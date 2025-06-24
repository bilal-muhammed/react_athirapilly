import React, { useState } from 'react';

const vehicles = [
  {
    type: 'Sedan',
    description: 'Comfortable for small families and city rides.',
    price: '₹1,800/day',
    seats: 4,
  },
  {
    type: 'SUV',
    description: 'Spacious and powerful. Perfect for hill stations and long rides.',
    price: '₹2,500/day',
    seats: 7,
  },
  {
    type: 'Tempo Traveller',
    description: 'Ideal for group travel and tours.',
    price: '₹4,500/day',
    seats: 12,
  },
  {
    type: 'Mini Bus',
    description: 'Great for office tours or large family groups.',
    price: '₹6,500/day',
    seats: 18,
  },
];

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter((v) =>
    v.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen px-4 py-10 sm:px-10 pt-20">
      <h1 className="text-3xl font-bold text-center text-[#44b50c] mb-8 mt-10">
        Book Your Ride
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search vehicle type (e.g., SUV, Tempo)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded border border-[#44b50c] focus:outline-none focus:ring-2 focus:ring-[#44b50c] transition"
        />
      </div>

      {/* Vehicle List */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredVehicles.length ? (
          filteredVehicles.map((v, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow border border-[#e5f5dc] p-6 hover:shadow-md transition hover:border-[#44b50c]"
            >
              <h2 className="text-xl font-semibold text-[#44b50c] mb-2">
                {v.type}
              </h2>
              <p className="text-gray-700 mb-2">{v.description}</p>
              <p className="text-sm text-gray-500 mb-1">
                Seats: {v.seats}
              </p>
              <p className="text-[#44b50c] font-bold">{v.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No vehicles match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Vehicles;