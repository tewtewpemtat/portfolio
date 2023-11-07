import React from 'react';

const Tools = () => {
  const img = {
    width: '110px', 
    height: '110px',
  };

  const text = {
    margin: '40px', 
    marginTop: '0px', 
    textAlign: 'center',
    width: '120px'
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom:'0px',textShadow: '1px 1px 1px #000000', color: 'black' }}>Tools</h1>
      <hr style={{ marginBottom: '40px', width: '4%', height: '3px', backgroundColor: '#9C27B0', border: '0px', boxShadow: '0px 2px 2px #888888' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={text}>
          <img src="./img/Flutter.png" alt="Web Development" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Flutter</p>
        </div>
        <div style={text}>
          <img src="./img/MySQL.png" alt="Programming" style={img} />
          <p style={{ marginTop: '20px',fontStyle:'oblique',fontSize: '20px', fontWeight: 'bold' }}>MySQL</p>
        </div>
        <div style={text}>
          <img src="./img/Studio.png" alt="Visual Studio Code" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Visual Studio Code</p>
        </div>
        <div style={text}>
          <img src="./img/Firebase.png" alt="Firebase" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Firebase</p>
        </div>
        <div style={text}>
          <img src="./img/Github.png" alt="GitHub" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>GitHub</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={text}>
          <img src="./img/React.png" alt="React" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>React</p>
        </div>
        <div style={text}>
          <img src="./img/Android.png" alt="Android Studio" style={img} />
          <p style={{ marginTop: '20px',fontStyle:'oblique',fontSize: '20px', fontWeight: 'bold' }}>Android Studio</p>
        </div>
        <div style={text}>
          <img src="./img/Postman.png" alt="Postman" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Postman</p>
        </div>
        <div style={text}>
          <img src="./img/Cisco.png" alt="Cisco Packet Tracer" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Cisco Packet Tracer</p>
        </div>
        <div style={text}>
          <img src="./img/Arduino.png" alt="Arduino IDE" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Arduino IDE</p>
        </div>
      </div>

      <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom:'0px',textShadow: '1px 1px 1px #000000', color: 'black',marginTop:'15px' }}>Programming Languages</h1>
      <hr style={{ marginBottom: '50px', width: '23%', height: '3px', backgroundColor: '#9C27B0', border: '0px', boxShadow: '0px 2px 2px #888888' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={text}>
          <img src="./img/Html.png" alt="HTML" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>HTML</p>
        </div>
        <div style={text}>
          <img src="./img/Php.png" alt="PHP" style={img} />
          <p style={{ marginTop: '20px',fontStyle:'oblique',fontSize: '20px', fontWeight: 'bold' }}>PHP</p>
        </div>
        <div style={text}>
          <img src="./img/Css.png" alt="CSS" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>CSS</p>
        </div>
        <div style={text}>
          <img src="./img/Java.png" alt="Java" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Java</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={text}>
          <img src="./img/C.png" alt="C" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>C</p>
        </div>
        <div style={text}>
          <img src="./img/C+.png" alt="C+" style={img} />
          <p style={{ marginTop: '20px',fontStyle:'oblique',fontSize: '20px', fontWeight: 'bold' }}>C+</p>
        </div>
        <div style={text}>
          <img src="./img/Python.png" alt="Python" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>Python</p>
        </div>
        <div style={text}>
          <img src="./img/Js.png" alt="JavaScript" style={img} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontStyle:'oblique',fontWeight: 'bold' }}>JavaScript</p>
        </div>
      </div>
    </div>

    
  );
};

export default Tools;
