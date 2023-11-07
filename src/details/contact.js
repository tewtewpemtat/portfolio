import React, {useState} from 'react';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

   const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      alert('Please fill in complete information.');
    } else {
      alert('Successfully');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <div style={{ paddingTop: '30px' }}>
      <div
        style={{
          background: `url('./img/bg8.jpg')`,
          backgroundSize: 'cover',
          height: 360,
        }}
      >
    <h1 style={{ paddingTop: '20px',paddingBottom:'10px' }}>Contact Us</h1>
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
    <form style={{ fontSize: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '500px'}} onSubmit={handleSubmit}>
      <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="name">Name:</label>
      <input style={{ padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }} type="text" id="name" name="name" onChange={handleInputChange} value={formData.name} />
      <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="email">Email:</label>
      <input style={{padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }} type="email" id="email" name="email" onChange={handleInputChange} value={formData.email} />
      <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="phone">Phone:</label>
      <input style={{padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }} type="text" id="phone" name="phone" onChange={handleInputChange} value={formData.phone} />
      <label style={{ marginBottom: '10px', fontWeight: 'bold', color: '#333' }} htmlFor="message">Message:</label>
      <textarea style={{ padding: '10px', marginBottom: '20px', width: '100%', height: '100px', borderRadius: '5px', border: '1px solid #ddd' }} id="message" name="message" onChange={handleInputChange} value={formData.message} />
      <input style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '20%' }} type="submit" value="Send" />
    </form>
</div>





    </div>
  );
};

export default Contact;
