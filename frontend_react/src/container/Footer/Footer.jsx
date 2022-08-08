import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    setEmailError(!email);
    setNameError(!username);
    setMessageError(!message);
    if (!email || !username || !message) {
      setLoading(false);
      return;
    }

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:valentin.rudloff.perso@gmail.com" className="p-text">valentin.rudloff.perso@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+33 06 25 16 37 22" className="p-text">+33 06 25 16 37 22</a>
        </div>
        <div className="app__footer-card ">
          <img src={images.linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/rudloffvalentin/?locale=en_US" className="p-text">Valentin's LinkedIn</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" style={nameError ? {backgroundColor: '#ff000057'} : {}} type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" style={emailError ? {backgroundColor: '#ff000057'} : {}} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              style={messageError ? {backgroundColor: '#ff000057'} : {}}
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" style={loading ? {backgroundColor: '#313BAC'} : {}} className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'} <FaPaperPlane/></button>
          
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
