import './Contact_section.css'

const Contact_section = () => {
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
                <i className="fas fa-map-marker-alt"></i>
                <div className="address">
                    <h3>Address</h3>
                    <p>20, Somewhere in world</p>
                </div>
              </div>
            </div>

            <div className="contact-info-2">
              <div className="contact-details">
                <i className="fas fa-envelope"></i>
                <div className="address">
                    <h3>Email</h3>
                    <p>nh4647352@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-info-2">
              <div className="contact-details">
                <i className="fas fa-phone-alt"></i>
                <div className="address">
                    <h3>Phone</h3>
                    <p>+088-01833220886</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-2" data-aos="fade-up">
            <form action="" >
              <div className="row">
                <div className="col-lg-6">
                  <div className="forms">
                    <input type="text" name="name" placeholder="Your Name" autoComplete='off' required="required" className="input1" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="forms">
                    <input type="email" name="Email" placeholder="Your Email" autoComplete='off' required="required" className="input1" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="forms">
                    <input type="phone" name="phone" placeholder="Your Phone" autoComplete='off' required="required" className="input1" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="forms">
                    <input type="subject" name="subject" placeholder="Subject" autoComplete='off' required="required" className="input1" />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="forms">
                    <textarea name="messege" placeholder="Write Your Message Here"></textarea>
                  </div>
                </div>
              </div>
              <div className="info">
                <a href="#" className="about-me"><span className="btn">Submit Now</span></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Contact_section;