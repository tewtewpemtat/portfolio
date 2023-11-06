import React from 'react';

const Skills = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom: '50px' }}>My Skills</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '80px', marginTop: '0px', textAlign: 'center' }}>
          <img src="./myphoto/Web.png" alt="Web Development" style={{ width: '170px', height: '170px' }} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>Web Development</p>
        </div>
        <div style={{ margin: '80px', marginTop: '0px', textAlign: 'center' }}>
          <img src="./myphoto/Program.png" alt="Programming" style={{ width: '170px', height: '170px' }} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>Programming</p>
        </div>
        <div style={{ margin: '80px', marginTop: '0px', textAlign: 'center' }}>
          <img src="./myphoto/Sql.png" alt="SQL Database" style={{ width: '170px', height: '170px' }} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>SQL Database</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '80px', marginTop: '0px', textAlign: 'center' }}>
          <img src="./myphoto/Mobile.png" alt="Mobile App Development" style={{ width: '170px', height: '170px' }} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>Mobile App Development</p>
        </div>
        <div style={{ margin: '80px', marginTop: '0px', textAlign: 'center' }}>
          <img src="./myphoto/Coding.png" alt="Coding" style={{ width: '170px', height: '170px' }} />
          <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>Coding</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
