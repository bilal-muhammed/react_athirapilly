import React, { useState } from 'react';

const hotelData = [
  {
    name: 'Athirappilly River Resort',
    description: 'Scenic riverside stay near Athirappilly waterfalls with modern amenities.',
    price: '₹2,499/night',
    rating: 4.3,
    location: 'Athirappilly',
  },
  {
    name: 'Rainforest Boutique Resort',
    description: 'Stay surrounded by lush greenery and the sound of waterfalls.',
    price: '₹5,999/night',
    rating: 4.8,
    location: 'Athirappilly',
  },
  {
    name: 'Green Valley Inn',
    description: 'Affordable and clean stay for families and small groups.',
    price: '₹1,299/night',
    rating: 3.9,
    location: 'Chalakudy',
  },
  {
    name: 'Luxury Hilltop Villa',
    description: 'Perfect for couples, enjoy sunset views from your private deck.',
    price: '₹4,799/night',
    rating: 4.6,
    location: 'Vazhachal',
  },
];

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHotels = hotelData.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen px-4 py-10 sm:px-10 pt-20">
      <h1 className="text-3xl font-bold text-center text-[#44b50c] mb-8 mt-10">
        Book Your Stay Near Athirappilly
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by hotel or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded border border-[#44b50c] focus:outline-none focus:ring-2 focus:ring-[#44b50c] transition"
        />
      </div>

      {/* Hotel Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredHotels.length ? (
          filteredHotels.map((hotel, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow border border-[#e5f5dc] p-6 hover:shadow-md transition hover:border-[#44b50c]"
            >
              <h2 className="text-xl font-semibold text-[#44b50c] mb-2">
                {hotel.name}
              </h2>
              <p className="text-gray-700 mb-2">{hotel.description}</p>
              <p className="text-sm text-gray-500 mb-1">Location: {hotel.location}</p>
              <p className="text-sm text-yellow-500 mb-2">⭐ {hotel.rating} / 5</p>
              <p className="text-[#44b50c] font-bold">{hotel.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No hotels match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Hotels;