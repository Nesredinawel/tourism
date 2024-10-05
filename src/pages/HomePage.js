import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // For styling and images
import img1 from "../assets/hunde-gemechu-vSpuHmEGxcI-unsplash.jpg";
import img2 from "../assets/clay-knight-ai1yq01pzwg-unsplash.jpg"
import img3 from "../assets/mulugeta-wolde-6SgfEwkA02Y-unsplash.jpg"
import img4 from "../assets/sintayehu-arega-hbRzMp8jl6c-unsplash.jpg"
import img5 from "../assets/solen-feyissa-3PLwg80r3-w-unsplash.jpg"
import img6 from "../assets/taylor-flowe-SPv-vFzuA5Q-unsplash.jpg"
import img7 from "../assets/upendra-aleti-PLpBeVX4gHY-unsplash.jpg"
const HomePage = () => {
  return (
    <div className="home-container">
     <div className='right'>
     <div><h1>Explore Ethiopia</h1></div>
    <div className='border-one'>
    <div className='border-right '>
    <img 
          src={img2}
          alt="Ethiopian Landscape" 
          className="back-image"
        />
    </div>
    <div className='border-left '>
    <img 
          src={img1}
          alt="Ethiopian Landscape" 
          className="back-image"
        />
    </div>
    <div className='border-lr '>
    <img 
          src={img1}
          alt="Ethiopian Landscape" 
          className="back-image"
        />
    </div>
    <div className='border-ll '>
    <img 
          src={img2}
          alt="Ethiopian Landscape" 
          className="back-image"
        />
    </div>
    </div>
    
     </div>
      <div className='left'>
      <p>
        Discover the rich history, breathtaking landscapes, and vibrant culture of Ethiopia. From the ancient city of 
        <strong> Axum</strong>, home of the Ark of the Covenant, to the stunning rock-hewn churches of <strong>Lalibela</strong>, 
        Ethiopia offers a unique journey through time. Adventure seekers can trek through the 
        <strong> Simien Mountains</strong> or visit the lowest point on Earth, the <strong>Danakil Depression</strong>.
      </p>
      
      <blockquote>
        "Ethiopia is not just a destination, it's a story of resilience, culture, and timeless beauty."
      </blockquote>

    

      <Link to="/about">
        <button className="btn learn-more-btn">Learn More</button>
      </Link>
      </div>
    </div>
  );
};

export default HomePage;
