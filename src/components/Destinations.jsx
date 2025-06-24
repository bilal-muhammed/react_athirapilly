import React from "react";

import borabora1 from "../assets/athirapillyimages/thekkady-elephants.webp";
import borabora2 from "../assets/athirapillyimages/th.jpg";
import maldives1 from "../assets/athirapillyimages/049130219Athirapally_Falls.jpg";
import maldives2 from "../assets/athirapillyimages/athirapillyforest.jpg";
import maldives3 from "../assets/athirapillyimages/cd.jpg";

const Destinations = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#44b50c] mb-3">
          All-Inclusive Athirappilly Tours
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Experience Nature's Majesty in the Heart of Kerala
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
            <img
              src={borabora1}
              alt="Elephants in Thekkady"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-bold">Wildlife Safari</h3>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={borabora2}
              alt="Athirappilly Waterfalls"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white text-sm font-bold">Majestic Waterfalls</h3>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={maldives1}
              alt="Athirappilly Forest"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white text-sm font-bold">Lush Greenery</h3>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={maldives2}
              alt="Forest Trail"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white text-sm font-bold">Nature Trails</h3>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-xl">
            <img
              src={maldives3}
              alt="Scenic Views"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <h3 className="text-white text-sm font-bold">Scenic Views</h3>
            </div>
          </div>
        </div>

        <button className="mt-8 px-8 py-3 bg-[#44b50c] text-white font-medium rounded-full hover:bg-[#3a9a0a] transition-colors shadow-lg hover:shadow-md">
          Explore All Tour Packages
        </button>
      </div>
    </section>
  );
};

export default Destinations;