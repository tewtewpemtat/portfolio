import React from 'react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div
        style={{
          background: `url('./img/bg1.jpg')`,
          backgroundSize: 'cover',
          height: 350,
        }}
      >
    <h1 style={{ paddingTop: '20px' }}>Contact Us</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
   <div style={{ margin: '0 90px' }}>
    <img src="./img/phone.png" alt="telephone" style={{ width: '100px', height: '100px' }} />
    <h2>080-678-0227</h2>
  </div>
  <div style={{ margin: '0 50px' }}>
    <img src="./img/email.png" alt="email" style={{ width: '100px', height: '100px' }} />
    <h2 style={{ textAlign: 'center' }}>pemtat.ruk@gmail.com</h2>
  </div>
  <div style={{ margin: '0 20px' }}>
    <img src="./img/address.png" alt="address" style={{ width: '100px', height: '100px' }} />
    <h2 style={{ maxWidth: '300px' }}>
      146/3 Wong Sawang 11 , Wong Sawang Subdistrict, Bang Sue District, Bangkok, 10800
    </h2>
  </div>
</div>
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <h1 style={{ }}>Message Us</h1>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <form style={{ fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '500px' }}>
    <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="name">Name:</label>
    <input style={{ padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }} type="text" id="name" name="name" />
    <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="email">Email:</label>
    <input style={{padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }} type="email" id="email" name="email" />
    <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="phone">Phone:</label>
    <input style={{padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }} type="text" id="phone" name="phone" />
    <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="message">Message:</label>
    <textarea style={{ padding: '10px', marginBottom: '20px', width: '100%', height: '100px', borderRadius: '5px', border: '1px solid #ddd' }} id="message" name="message" />
    <input style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '20%' }} type="submit" value="Send" />
  </form>
</div>





    </div>
  );
};

export default Contact;
