import React from 'react';
import Selection from './Selection';

import borabora1 from '../assets/athirapillyimages/image1.jpg';
import borabora2 from '../assets/athirapillyimages/vazhachal-falls.jpg';
import maldives1 from '../assets/athirapillyimages/R.jpg';
import maldives2 from '../assets/athirapillyimages/OIP.jpg';
import maldives3 from '../assets/athirapillyimages/safari.jpg';
import keywest from '../assets/athirapillyimages/resort.jpg';

const Selections = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#44b50c] mb-3">
            Discover Athirappilly's Wonders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the breathtaking beauty of Kerala's most iconic destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Selection 
            figure={borabora1} 
            caption='Athirapilly Falls'
            description='The "Niagara of India" with majestic cascades'
          />
          <Selection 
            figure={borabora2} 
            caption='Vazhachal Falls'
            description='Twin waterfalls surrounded by lush greenery'
          />
          <Selection 
            figure={maldives1} 
            caption='Cultural Shows'
            description='Traditional Kathakali and Kalaripayattu performances'
          />
          <Selection 
            figure={maldives2} 
            caption='Forest Stay'
            description='Luxury eco-resorts nestled in the rainforest'
          />
          <Selection 
            figure={maldives3} 
            caption='Jungle Safari'
            description='Spot elephants and rare birds in their natural habitat'
          />
          <Selection 
            figure={keywest} 
            caption='Premium Resorts'
            description='5-star accommodations with waterfall views'
          />
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#44b50c] text-white font-medium rounded-full hover:bg-[#3a9a0a] transition-colors shadow-lg hover:shadow-md border border-[#3a9a0a]">
            View All Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default Selections;