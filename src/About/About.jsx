import React from 'react';
import './About.css'
import myImage from '../assets/aboutsect.png'

const About = () => {
    return (
        <div className='container' id='abo'>
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
                </div>
            </div>
        </div>
    );
};

export default About;