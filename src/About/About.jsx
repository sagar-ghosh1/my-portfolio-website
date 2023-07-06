import React from 'react';
import './About.css'
import myImage from '../assets/aboutsect.png'

const About = () => {
    return (
        <div className='container' id='abo' data-aos="zoom-in-up" data-aos-duration="1500">
            <h1 className='text-center abouttitle'>About Me</h1>
            <div className='flexsection'>
                <div className='imgSection'>
                    <img src={myImage} alt="" />
                </div>
                <div>
                    <p>I m a Front-end Developer with over 2 years of exprience.
                        As a web developer experienced in , JavaScript, my goal is to build captivating websites and applications.
                        I am eager to learn and collaborate with a talented team to create user- friendly web solutions.
                        By writing clean code and problem- solving effectively,
                        I aim to contribute to organizational success
                        while advancing my career in web development.</p>

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
        </div>
    );
};

export default About;