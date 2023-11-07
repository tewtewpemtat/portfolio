import React from 'react';

const Experience = () => {
  const blockStyle = {
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    justifyContent: 'start',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    backgroundImage: "url('./img/bg8.jpg')",
    backgroundSize: 'cover',
    width: '1000px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
  };

  const head = {
    fontWeight: 'bold',
    fontSize: '24px',
    margin: '10px 0',
    color: '#fff',
    textShadow: '2px 2px 4px #000000',
  };

  const textStyle = {
    fontSize: '20px',
    margin: '10px 0',
    color: '#fff',
    textShadow: '1px 1px 2px #000000',
    textAlign: 'start',
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '60px', marginBottom: '20px', alignItems: 'center' }}>
        <div style={blockStyle}>
          <img src="./img/Hotel.png" alt="Head" style={{ width: '500px', height: '250px', borderRadius: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '20px' }}>
            <h2 style={head}>Web Application for Hotel Reservation</h2>
            <p style={textStyle}>Developed a hotel reservation website as a side project, using HTML, PHP, and CSS for front-end and back-end design, with MySQL as the database</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '60px', marginBottom: '20px', alignItems: 'center' }}>
        <div style={blockStyle}>
          <img src="./img/Trip.png" alt="Head" style={{ width: '250px', height: '500px', borderRadius: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '20px' }}>
            <h2 style={head}>Mobile Application for Triptour</h2>
            <p style={textStyle}>Currently developing a mobile application as my final project. This app allows friends to join trips and travel together. The project is being developed using the Flutter framework and utilizes the Google Maps API, with Firebase Cloud Storage as the main database for this application</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '60px', marginBottom: '20px', alignItems: 'center' }}>
        <div style={blockStyle}>
          <img src="./img/Bus.png" alt="Head" style={{ width: '400px', height: '470px', borderRadius: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '20px' }}>
            <h2 style={head}>Designing the API for a bus ticket booking website</h2>
            <p style={textStyle}>Testing and building an API by designing and coding the handlers, models, and routes, tailored to specific use cases and choosing appropriate HTTP methods.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
