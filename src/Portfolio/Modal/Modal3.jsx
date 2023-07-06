import React from 'react';
import './Modal3.css'
import modal2 from '../../assets/deepthout.png'

const Modal3 = () => {
  return (
    <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Deep Thought</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <figure><img src={modal2} alt="" /></figure>

            <p>
              Deep Thought overview <br /> <br />
              <span>key Features</span> <br />
              1. This is an exercise website of mine doing exercise type work.
              <br />
              2. Here are the names of what they teach and their pictures. <br />
              3. Here one can buy any product if he wants and I cant buy it. <br />
              4. He has to pay to buy the product. <br />
              5. If someone wants to delete the product again, I cant take it again. <br />
              6. Again, if it doesnt work properly, it will give an error.
            </p> <br />
            <p>
              <span>Technologies</span>, <br />
              HTML5, CSS3, Vercel, React Js, Firebase, Tailwind CSS, Daisy UI, react-helmet-async, MongoDB, Express Js, Node Js, React router, JWT, Axios, AOS Animation, Sweetalert, React query, swiper, react-hook-form, toastify
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal3;