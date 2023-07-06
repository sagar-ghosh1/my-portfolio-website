import React from 'react';
import './Modal1.css'
import modal1 from '../../assets/modalblog.png'

const Modal1 = () => {
  return (
    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Food Club</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <figure><img src={modal1} alt="" /></figure>

            <p>
              Food Club overview <br /> <br />
              <span>key Features</span> <br />
              1. If you like the food of any recipe, you can tell about that recipe by clicking the view recipe button.
              <br />
              2. If the user is logged in, his name can be seen in the navbar with his picture and tooltip. <br />
              3. It is a cooking and food-related website. <br />
              4. This site uses a login system. <br />
              5. Favorite food cant be added without login. <br />
              6. If the user is logged in, he can view the safe and recipe details.
            </p> <br />
            <p>
              <span>Technologies</span>, <br />
              HTML5, CSS3, Tailwind CSS,  DaisyUI, ReactJs,  Firebase, React-lazy-load, MongoDB, React-to-pdf, Express Js, NodeJs, React router, Vercel
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

export default Modal1;