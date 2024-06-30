import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import img1 from '../assets/pic1.png';
import img2 from '../assets/pic2.png';
import img3 from '../assets/pic3.png';
import img4 from '../assets/Poster.png';
import img5 from '../assets/poster2.webp';
import img6 from '../assets/poster3.jpg';
import img7 from '../assets/poster4.jpg';
import CarouselComponent from '../components/CarouselComponent';
import UpcomingSession from '../components/upcoming';
import OurTutors from '../components/OurTutor';
import FeaturedVideo from '../components/FeatureVideo';
import Card from '../components/Card';
import Footer from '../components/Footer'; 
import SignupPage from './SignupPage';

const currentLiveSessions = [
  { image: img1, title: 'Session 1', time: '9:00 AM - 10:00 AM', tutor: 'John Doe' },
  { image: img2, title: 'Session 2', time: '10:00 AM - 11:00 AM', tutor: 'Jane Smith' },
  { image: img3, title: 'Session 3', time: '11:00 AM - 12:00 PM', tutor: 'Alice Johnson' },
  { image: img4, title: 'Session 4', time: '12:00 PM - 1:00 PM', tutor: 'Michael Brown' },
  { image: img5, title: 'Session 5', time: '1:00 PM - 2:00 PM', tutor: 'John Doe' },
  { image: img6, title: 'Session 6', time: '2:00 PM - 3:00 PM', tutor: 'Jane Smith' },
  { image: img7, title: 'Session 7', time: '3:00 PM - 4:00 PM', tutor: 'Alice Johnson' },
  { image: img4, title: 'Session 8', time: '4:00 PM - 5:00 PM', tutor: 'Michael Brown' },
];
const items = [
  { image: img4 ,detail: 'Detail 1' },
  { image: img5,detail : 'Detail 2' },
  { image: img6,detail : 'Detail 3' },
  { image: img7,deatail: 'Detail 4' },
  { image: img5,deatail: 'Detail 4' },
  { image: img6,deatail: 'Detail 4' },
  
];

const LandingPage = () => {
  // const [showStudentModal, setShowStudentModal] = useState(false);
  // const [showTeacherModal, setShowTeacherModal] = useState(false);

  // const openStudentModal = () => {
  //   setShowStudentModal(true);
  // };

  // const closeStudentModal = () => {
  //   setShowStudentModal(false);
  // };

  // const openTeacherModal = () => {
  //   setShowTeacherModal(true);
  // };

  // const closeTeacherModal = () => {
  //   setShowTeacherModal(false);
  // };

  return (
    <div>
      <Navbar />
      {/* <SignupPage isOpen={showStudentModal} onClose={closeStudentModal} />
      <SignupPage isOpen={showTeacherModal} onClose={closeTeacherModal} /> */}

      <CarouselComponent imageData={items}/>

      <section className="p-8">
        <h2 className="text-3xl mb-6">Current Live Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentLiveSessions.slice(0, 3).map((session, index) => (
            <Card
              key={index}
              image={session.image}
              title={session.title}
              time={session.time}
              tutor={session.tutor}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {currentLiveSessions.slice(3, 6).map((session, index) => (
            <Card
              key={index}
              image={session.image}
              title={session.title}
              time={session.time}
              tutor={session.tutor}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-red-500 py-2 px-4 rounded">See More</button>
        </div>
      </section>
    
      <UpcomingSession />
      <OurTutors />
      <FeaturedVideo />

      <Footer />
    </div>
  );
};

export default LandingPage;