import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'; // Optional: for styling
import img1 from "../assets/hunde-gemechu-vSpuHmEGxcI-unsplash.jpg";
const AboutPage = () => {
  return (
    <div className="about-container">
        <div className='about-left'>
        <img 
          src={img1}
          alt="Ethiopian Landscape" 
          className="back-image"
        />
        </div>
     <div className='about-right'>
     <h1>About Us</h1>
      <p>
        We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage. Our mission is to help you explore the hidden gems of Ethiopia, making every journey unique and filled with authentic moments.
      </p>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
     </div>
    </div>
  );
};

export default AboutPage;
