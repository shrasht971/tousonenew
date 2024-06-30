// Card.js
import React from 'react';
// import { FaPlayCircle } from 'react-icons/fa'; // Import the Play Circle icon from react-icons/fa

const Card = ({ image, title, time, tutor }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden p-4 flex justify-around items-center">
      <div className="w-full h-48 mb-4">
        <img src={image} alt={title} className="w-1/2 h-full object-cover rounded-lg" />
      </div>
      <div className="">
        <div className="flex w-36 item-center ">
          {/* <FaPlayCircle className="text-green-500 w-6 h-6 mr-2" /> */}
           {/* Icon for Live Session */}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{time}</p>
        <p className="text-gray-800 mt-2">Tutor: {tutor}</p>
      </div>
    </div>
  );
};

export default Card;
