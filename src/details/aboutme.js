import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    './myphoto/1.jpg', 
    './myphoto/2.jpg',
    './myphoto/3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div style={{ paddingTop: '70px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',marginBottom: '20px' }}>
        <img src={images[currentImage]} alt={`slide ${currentImage + 1}`} style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '0 20px' }} />
      </div>
      <div style={{
        border: '10px solid #E1BEE7',
        padding: '20px', 
        borderRadius: '10px', 
        textAlign: 'center', 
        maxWidth: '600px', 
        margin: '0 auto', 
        background: `url('./img/bg3.jpg')`,
        backgroundSize: 'cover',
        fontFamily: 'Arial, sans-serif', 
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', 
        }}>
        <h2 style={{ color: '#673AB7' }}>Hello, I'm Tew</h2> 
        <p>
              21 years old<br/>
              Currently studying at King Mongkut's University of Technology North Bangkok, majoring in Electronics Engineering, Computer Branch.<br />
              I have a strong interest in enhancing my skills in web development, mobile app development, database design, front-end, and back-end development. I am passionate about advancing these skills individually or in tandem.<br />
              I have excellent teamwork and communication skills, which enable me to work effectively with others to produce the best results.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
