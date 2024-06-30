import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tutor1 from '../assets/pic1.png';
import tutor2 from '../assets/pic1.png';
import tutor3 from '../assets/pic1.png';
import tutor4 from '../assets/pic1.png';

const tutors = [
  { image: tutor1, name: 'John Doe', specialization: 'Stock Market' },
  { image: tutor2, name: 'Jane Smith', specialization: 'Forex Trading' },
  { image: tutor3, name: 'Alice Johnson', specialization: 'Crypto Market' },
  { image: tutor4, name: 'Michael Brown', specialization: 'Investment Strategies' },
  { image: tutor1, name: 'John Doe 2', specialization: 'Stock Market' },
  { image: tutor2, name: 'Jane Smith 2', specialization: 'Forex Trading' },
  { image: tutor3, name: 'Alice Johnson 2', specialization: 'Crypto Market' },
  { image: tutor4, name: 'Michael Brown 2', specialization: 'Investment Strategies' },
];

const OurTutors = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl mb-6">Our Tutors</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        className="w-full"
        renderIndicator={false}
      >
        {Array.from({ length: Math.ceil(tutors.length / 4) }, (_, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tutors.slice(i * 4, i * 4 + 4).map((tutor, index) => (
              <div key={index} className="border rounded-lg shadow-lg overflow-hidden p-4">
                <img src={tutor.image} alt={tutor.name} className="w-full h-48 object-fill mb-4" />
                <h3 className="text-xl font-semibold">{tutor.name}</h3>
                <p className="text-gray-800 mt-2">{tutor.specialization}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <div className="flex justify-end mt-4">
        <button className="text-red-500 py-2 px-4 rounded">See More</button>
      </div>
    </section>
  );
};

export default OurTutors;
