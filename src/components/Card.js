// Card.js
import React from 'react';

const Card = ({ image, title, time, tutor }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden p-4 d-flex justify-around">
      <div className="w-full h-48 mb-4">
        <img src={image} alt={title} className="w-full h-full object-contain " />
      </div>
      <div clas=''>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{time}</p>
      <p className="text-gray-800 mt-2">Tutor: {tutor}</p>
    </div>
    </div>
  );
};

export default Card;
