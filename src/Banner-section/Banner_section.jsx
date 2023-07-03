import './Banner_section.css'
import myImage from '../assets/Screenshot_1.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner_section = () => {
  const [text] = useTypewriter({
    words: ['Front-end Developer', 'MERN Stack Develop', 'React js Developer', 'Web Developer',],
    loop: {}
  })

  return (
    <section className="banner-section" id="home">
      <div className="containers">
        <div className="row">

          <a href="#self" className="button">
            <div className="pointer"></div>
          </a>

          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="1500">
            <div className="home-details">
              <h3>Hello, Im Sagar Ghosh</h3>
              <h1>{text}
                <span style={{ "color": "#f75023" }}>
                  <Cursor />
                </span>
              </h1>
              <p>A <span className="green-text">Web Developer</span> From <span className="blue-text">Bangladesh</span></p>
              <div className="para">
                <p>Im Web Developer From Bangladesh, and Im very passionate and dedicated to my work with a strong focus in Problem solving.I love to get new experiences and always learn from my surroundings.I looking forward to any opportunities and challenges.</p>
              </div>
              <div className="info">
                <a href="#contact" className="contact-me"><span className="btn">Hire Me</span></a>
                <ul>
                  <li>
                    <a href="https://web.facebook.com/profile.php?id=100012189210083" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="https://github.com/sagar-ghosh1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sagar-ghosh-b92585280/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="image-sec" data-aos="fade-up" data-aos-duration="1500">
              <img src={myImage} alt="image" className="personal-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_section;