import React from 'react';

const tourPackages = [
  {
    title: 'Athirappilly Waterfalls Day Trip',
    description:
      'Experience the breathtaking beauty of Athirappilly waterfalls and enjoy a nature walk through the Sholayar forest range.',
    price: '₹1,499',
    duration: '1 Day',
    highlights: ['Waterfalls', 'Forest Trek', 'Photography Spots'],
  },
  {
    title: 'Athirappilly – Vazhachal Combo',
    description:
      'Visit the twin waterfalls of Athirappilly and Vazhachal. Perfect for families and couples looking for a scenic getaway.',
    price: '₹2,799',
    duration: '1 Day',
    highlights: ['Athirappilly & Vazhachal', 'Picnic Spots', 'Eco-Tourism'],
  },
  {
    title: 'Athirappilly + Malakkappara Forest Tour',
    description:
      'Explore Athirappilly and take a scenic drive through dense forests to Malakkappara, spotting wildlife on the way.',
    price: '₹3,999',
    duration: '2 Days',
    highlights: ['Athirappilly', 'Tea Estates', 'Wildlife Safari'],
  },
];

const Tours = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-8 pt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#44b50c] mb-10 mt-10">
        Explore Tour Packages Around Athirappilly
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {tourPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-[#e5f5dc] hover:shadow-lg transition-all duration-300 hover:border-[#44b50c]"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#44b50c] mb-2">
                {pkg.title}
              </h2>
              <p className="text-gray-700 mb-3">{pkg.description}</p>
              <ul className="text-sm text-[#44b50c] mb-4 list-disc list-inside">
                {pkg.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-[#44b50c] font-bold text-lg">
                  {pkg.price}
                </span>
                <span className="text-sm text-gray-500">{pkg.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;