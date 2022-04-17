import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k37amsw', 'template_bmxbxk3', form.current, 'F9Oi3adFebGL4Oth3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className='content-section'>
      <h1>Send a Message!</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" id='btn' />
      </form>
    </div>
  );
};
