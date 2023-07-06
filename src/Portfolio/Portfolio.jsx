import React from 'react';
import './Portfolio.css'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { FiServer } from 'react-icons/fi';
import Modal1 from './Modal/Modal1';
import Modal2 from './Modal/Modal2';
import Modal3 from './Modal/Modal3';

const Portfolio = () => {
  return (
    <div className='container projectCard' id='portfolio'>
      <div className="card" style={{ "width": "24rem" }}>
        <figure className='backgroundImg1'></figure>
        <div className="card-body">
          <h5 className="card-title">Food Club</h5>
          <p className="card-text">Food Club The website highlights top chefs, providing their names, experiences, likes, and further details. All Chef and their short details </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-client " target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-server" target='_blank' rel='noreferrer'><FiServer className='iconStyle'></FiServer></a>
              <a className='iconStyle' href="https://food-club-d8106.web.app/" target='_blank' rel='noreferrer'><AiOutlineLink className='iconStyle'></AiOutlineLink></a>

            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
              Details
            </button>
            <Modal1></Modal1>
          </div>
        </div>
      </div>
      <div className="card" style={{ "width": "24rem" }}>
        <figure className='backgroundImg2'></figure>
        <div className="card-body">
          <h5 className="card-title">Robotics Toys</h5>
          <p className="card-text">Robotics Toys This is a toy-buying and selling website. A seller can list toys here and view his toy collection. a user can see all the toys added by the seller.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/robotics-toys-client" target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/robotics-toys-server" target='_blank' rel='noreferrer'><FiServer className='iconStyle'></FiServer></a>
              <a className='iconStyle' href="https://robotics-toys.web.app/" target='_blank' rel='noreferrer'><AiOutlineLink className='iconStyle'></AiOutlineLink></a>

            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
              Details
            </button>
            <Modal2></Modal2>
          </div>
        </div>
      </div>
      <div className="card" style={{ "width": "24rem" }}>
        <figure className='backgroundImg3'></figure>
        <div className="card-body">
          <h5 className="card-title">Deep Thought</h5>
          <p className="card-text">Deep Thought This full site creates with the MERN stack. There are some admin roles. If any user registers on our site by default their role was a student.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/deep-thought-client" target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/deep-thought-server" target='_blank' rel='noreferrer'><FiServer className='iconStyle'></FiServer></a>
              <a className='iconStyle' href="https://648dea9e73a33f277cc9e1d9--grand-crepe-235e4e.netlify.app/" target='_blank' rel='noreferrer'><AiOutlineLink className='iconStyle'></AiOutlineLink></a>

            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
              Details
            </button>
            <Modal3></Modal3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;