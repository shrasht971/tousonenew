import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ imageData }) => {
  return (
    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} className="w-full">
      {imageData.map((item, index) => (
        <div key={index} className="relative">
          <img 
            src={item.image} 
            alt={`Slide ${index}`} 
            className="w-full h-64 sm:h-[50%] md:h-screen object-cover" 
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h1 className="text-xl md:text-5xl text-white font-bold">Unlimited Share Market Classes</h1>
            <p className="text-sm md:text-2xl text-white mt-4">Share, Market classes, & More</p>
            <button className="mt-4 md:mt-8 bg-green-500 text-white py-2 px-4 rounded">Play Now</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
