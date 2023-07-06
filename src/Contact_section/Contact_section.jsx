import { useRef } from 'react';
import './Contact_section.css'
import emailjs from '@emailjs/browser';

const Contact_section = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_863py8m', 'template_yg6sfyl', form.current, 'mDm8v3rd7WdQj2Lsw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section className="contact-section" id="contact">
      <div className="containers">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="contact-info-1">
              <h2>Contact Info</h2>
              <div className="separator-2"></div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-down">

            <div className="contact-info-2">
              <div className="contact-details">
                <i className="fas fa-envelope"></i>
                <div className="address">
                  <h3>Email</h3>
                  <p>sagarghosh4000@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-info-2">
              <div className="contact-details">
                <i className="fas fa-phone-alt"></i>
                <div className="address">
                  <h3>Phone</h3>
                  <p>+8801748671301</p>
                </div>
              </div>
            </div>

            <div className="contact-info-2">
              <div className="contact-details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="address">
                  <h3>Address</h3>
                  <p>Satkhira, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-6 offset-lg-2" data-aos="fade-up">
            <form className='forms' ref={form} onSubmit={sendEmail}>
              <input placeholder='Your Name' className='input1' type="text" name="user_name" />
              <input placeholder='Your Email' className='input1' type="email" name="user_email" />
              <textarea placeholder='write your message' name="message" />
              <input className='contactbutton' type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_section;