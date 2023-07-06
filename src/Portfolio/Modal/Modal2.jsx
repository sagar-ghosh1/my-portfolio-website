import React from 'react';
import './Modal2.css'
import modal2 from '../../assets/robortt.png'

const Modal2 = () => {
    return (
        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Robotics Toys</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <figure><img src={modal2} alt="" /></figure>

                        <p>
                            Robotics Toys overview <br /> <br />
                            <span>key Features</span> <br />
                            1. It is a game type website.
                            <br />
                            2. Everything here should be given to the children. <br />
                            3. You need to login to go here. <br />
                            4. If you go to all toys, you will see how many toys there are. <br />
                            5. Add Toy Shows how many toys you have added. <br />
                            6. Again here you can delete or edit if you want. <br />
                            7. You will get to do many add toys before and after. <br />
                            6. Again you can blog if you want.
                        </p> <br />
                        <p>
                        <span>Technologies</span>, <br />
                            ReactJs, React router, Tailwind CSS, AOS Animation, Daisy UI, Firebase, Sweetalert, Express Js, Node Js, Vercel, MongoDB, toastify, react-helmet-async
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

export default Modal2;