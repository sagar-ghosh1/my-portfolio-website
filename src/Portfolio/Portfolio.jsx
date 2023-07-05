import React from 'react';
import './Portfolio.css'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { FiServer } from 'react-icons/fi';
import Modal1 from './Modal/Modal1';

const Portfolio = () => {
  return (
    <div className='container projectCard'>
      <div className="card" style={{ "width": "24rem" }}>
        <figure className='backgroundImg'></figure>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-client " target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-server" target='_blank' rel='noreferrer'><FiServer className='iconStyle'></FiServer></a>
              <a className='iconStyle' href="https://food-club-d8106.web.app/" target='_blank' rel='noreferrer'><AiOutlineLink className='iconStyle'></AiOutlineLink></a>

            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Launch static
            </button>
            <Modal1></Modal1>
          </div>
        </div>
      </div>
      <div className="card" style={{ "width": "24rem" }}>
        <figure className='backgroundImg'></figure>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-client " target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-server" target='_blank' rel='noreferrer'><FiServer className='iconStyle'></FiServer></a>
              <a className='iconStyle' href="https://food-club-d8106.web.app/" target='_blank' rel='noreferrer'><AiOutlineLink className='iconStyle'></AiOutlineLink></a>

            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Launch static
            </button>
            <Modal1></Modal1>
          </div>
        </div>
      </div>
      <div className="card" style={{ "width": "24rem" }}>
        <figure className='backgroundImg'></figure>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-client " target='_blank' rel='noreferrer'><AiFillGithub></AiFillGithub></a>
              <a className='iconStyle' href="https://github.com/sagar-ghosh1/food-club-server" target='_blank' rel='noreferrer'><FiServer className='iconStyle'></FiServer></a>
              <a className='iconStyle' href="https://food-club-d8106.web.app/" target='_blank' rel='noreferrer'><AiOutlineLink className='iconStyle'></AiOutlineLink></a>

            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Launch static
            </button>
            <Modal1></Modal1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;