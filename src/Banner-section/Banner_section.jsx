import './Banner_section.css'
import myImage from '../assets/sagarbanner.png'
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

          <a href="#abo" className="button">
            <div className="pointer"></div>
          </a>

          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="1500">
            <div className="home-details">
              <h3>Hello, Im Sagar Ghosh!!</h3>
              <h1>{text}
                <span style={{ "color": "#f75023" }}>
                  <Cursor />
                </span>
              </h1>
              <p><span className="green-text">Web Developer</span> and <span className="blue-text">Web Designer</span></p>
              <div className="para">
                <p>I possess a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love of learning, keen attention to detail and a strong commitment to my work. I like to get new experiences and I like to learn new things. Explore my resume below to get a better understanding of my skills and experience.</p>
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