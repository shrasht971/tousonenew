import React from 'react';
import { Carousel } from 'antd';
import videoThumbnail1 from '../assets/Poster.png'; // Placeholder for video thumbnails
import videoThumbnail2 from '../assets/Poster.png'; // Placeholder for video thumbnails
import videoThumbnail3 from '../assets/Poster.png'; // Placeholder for video thumbnails
import videoThumbnail4 from '../assets/Poster.png'; // Placeholder for video thumbnails

const videoItems = [
  { image: videoThumbnail1, title: 'Exclusive Investment Strategies', description: 'Learn the secrets from the best in the industry' },
  { image: videoThumbnail2, title: 'Advanced Trading Techniques', description: 'Master the market with advanced strategies' },
  { image: videoThumbnail3, title: 'Portfolio Management', description: 'Optimize your portfolio for maximum returns' },
  { image: videoThumbnail4, title: 'Market Analysis', description: 'Stay ahead with expert analysis' },
];

const FeaturedVideo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl mb-6">Featured Video</h2>
      <Carousel {...settings}>
        {videoItems.map((item, index) => (
          <div key={index} className="p-4">
            <div className="relative">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-xl text-white font-bold text-center">{item.title}</h3>
                <p className="text-white mt-2 text-center">{item.description}</p>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex justify-end mt-4">
        <button className="text-red-500 py-2 px-4 rounded">See More</button>
      </div>
    </section>
  );
};

export default FeaturedVideo;
