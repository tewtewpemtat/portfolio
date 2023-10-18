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
<h2 style={{ paddingTop: '20px' }}>Contact Us</h2>
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

      <form>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="phone">Phone:</label>
        <br />
        <input type="text" id="phone" name="phone" />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea id="message" name="message" rows="4" cols="50" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
