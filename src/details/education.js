import React from 'react';

const Education = () => {
  const blockStyle = {
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    backgroundImage: "url('./img/bg1.jpg')",
    backgroundSize: 'cover',
    width: '520px',  
    height: '420px', 
  };
  const imgStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
  };

  const universityStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    margin: '10px 0',
  };

  const textStyle = {
    fontSize: '18px',
    margin: '10px 0',
    fontStyle:'oblique'
  };

  return (
    <div style={{ paddingTop: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={blockStyle}>
          <img src="./myphoto/kmutnb.png" alt="University" style={imgStyle} />
          <h2 style={universityStyle}>King Mongkut's University of Technology North Bangkok</h2>
          <p style={textStyle}>Electronics Engineering Technology</p>
          <p style={textStyle}>4th year</p>
          <p style={textStyle}>Educational Qualification: Engineering</p>
          <p style={textStyle}>Status: Currently Studying</p>
        </div>  
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={blockStyle}>
          <img src="./myphoto/Mbk.png" alt="University" style={imgStyle} />
          <h2 style={universityStyle}>Mubankru Technological College</h2>
          <p style={textStyle}>Electronics</p>
          <p style={textStyle}>3rd year</p>
          <p style={textStyle}>Educational Qualification: Vocational Certificate</p>
          <p style={textStyle}>Status: Graduated</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
