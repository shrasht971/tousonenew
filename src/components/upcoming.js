import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/Poster.png';

const upcomingSessions = [
  { image: img1, title: 'Daily Stock', time: '9:00 AM - 10:00 AM', tutor: 'John Doe' },
  { image: img2, title: 'Forex Trading', time: '10:00 AM - 11:00 AM', tutor: 'Jane Smith' },
  { image: img3, title: 'Crypto Market', time: '11:00 AM - 12:00 PM', tutor: 'Alice Johnson' },
  { image: img4, title: 'Investment Strategies', time: '12:00 PM - 1:00 PM', tutor: 'Michael Brown' },
  { image: img1, title: 'Daily Stock 2', time: '1:00 PM - 2:00 PM', tutor: 'John Doe' },
  { image: img2, title: 'Forex Trading 2', time: '2:00 PM - 3:00 PM', tutor: 'Jane Smith' },
  { image: img3, title: 'Crypto Market 2', time: '3:00 PM - 4:00 PM', tutor: 'Alice Johnson' },
  { image: img4, title: 'Investment Strategies 2', time: '4:00 PM - 5:00 PM', tutor: 'Michael Brown' },
];

const UpcomingSession = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl mb-6">Upcoming Sessions</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        className="w-full"
        renderIndicator={false}
      >
        {Array.from({ length: Math.ceil(upcomingSessions.length / 4) }, (_, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingSessions.slice(i * 4, i * 4 + 4).map((session, index) => (
              <div key={index} className="border rounded-lg shadow-lg overflow-hidden p-4">
                <img src={session.image} alt={session.title} className="w-full h-48 object-contain  mb-4" />
                <h3 className="text-xl font-semibold">{session.title}</h3>
                <p className="text-gray-600">{session.time}</p>
                <p className="text-gray-800 mt-2">Tutor: {session.tutor}</p>
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

export default UpcomingSession;
