import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact(){
  const form = useRef();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(e.target.user_name.value && validateEmail(e.target.user_email.value) && e.target.message.value){
      emailjs.sendForm('service_k37amsw', 'template_bmxbxk3', form.current, 'F9Oi3adFebGL4Oth3')
        .then((result) => {
            console.log(result.text);
            if (result.text){
              e.target.reset()
              Swal.fire(
                'Email Sent!',
                'Brandon will reply ASAP!',
                'success'
              )
            }
        }).catch((error) => {
            console.log(error.text);
            Swal.fire({
              title: 'Error!',
              text: 'Server error please try again later',
              icon: 'error',
              confirmButtonText: 'Close'
            })
        });
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out fields correctly',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  };

  return (
    <div id="contact" className='content-section'>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3>Send a Message!</h3>
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
