import React from 'react';
import { Carousel as AntCarousel ,Card } from 'antd';

const Carousel = ({ items }) => {
  return (
    <AntCarousel autoplay>
      {items.map((item, index) => (
        <div key={index} className="p-4">
          <Card image={item.image} details={item.details} />
        </div>
      ))}
    </AntCarousel>
  );
};

export default Carousel;