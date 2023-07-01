import { useState } from 'react';
import './Portfolio_section.css'
import { useEffect } from 'react';
import Portfolio_card from './Portfolio_card/Portfolio_card';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';

const Portfolio_section = () => {
    const [project, setProject] = useState([]);
    const [select, setSelect] = useState("Boostrap");
    const [modal, setModal] = useState(false)
    const [singleData, setSingleData] = useState([]);

    // Get All Data From Server side
    useEffect(() => {
        fetch('https://portfolio-website-server-xi.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProject(data)
            })
    }, [])

    // Get singleData from Server side
    const handleData = (id) => {
        fetch(`https://portfolio-website-server-xi.vercel.app/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSingleData(data)
            })
        setModal(true)
    }

    const allProject = project.filter(item => item.design === select)

    return (
        <>
            <section className='portfolio-section' id="portfolio">
                <div className="containers">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Portfolio Showcase</h2>
                            <div className="separator-4"></div>

                            <div className='all-tab-section'>
                                <ul>
                                    <li onClick={() => setSelect("Html")} className={`${select === "Html" ? "actives" : ""}`}>HTML & CSS</li>
                                    <li onClick={() => setSelect("Boostrap")} className={`${select === "Boostrap" ? "actives" : ""}`}>Bootstrap</li>
                                    <li onClick={() => setSelect("Tailwind")} className={`${select === "Tailwind" ? "actives" : ""}`}>Tailwind CSS</li>
                                    <li onClick={() => setSelect("React")} className={`${select === "React" ? "actives" : ""}`}>React JS</li>
                                    <li onClick={() => setSelect("Full-stack")} className={`${select === "Full-stack" ? "actives" : ""}`}>Full Stack</li>
                                </ul>
                            </div>

                            <div className='row gx-4 gy-4'>
                                {
                                    allProject.map(projects => <Portfolio_card
                                        key={projects._id}
                                        projects={projects}
                                        handleData={handleData}
                                    ></Portfolio_card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div className={`${modal ? "modals activeness " : "modals"}`}>
                <div className='containers'>
                    <h2 className='mb-5'>{singleData.Name} Website</h2>
                    <div className='modal-details'>
                        <div className='modal-images-div'>
                            <img src={singleData.image} className='img-size' />
                        </div>

                        <div className='project-description'>
                            <div className="block-title">
                                <h3>Description</h3>
                            </div>
                            <ul className="project-general-info">
                                <li><p><i className="fa fa-user"></i> Nazmul Hassan</p></li>
                                <li><p><i className="fa fa-globe"></i> <Link to={`${singleData.live_link}`} target="_blank" className='link'>{singleData.live_link}</Link></p></li>
                                <li><p><i className="fa fa-calendar"></i>{singleData.date}</p></li>
                            </ul>
                            <div className="block-title">
                                <h3>Technology</h3>
                            </div>
                            <ul className='tech-list'>
                                {
                                    (singleData.technology)?.map((tech, index) => <li key={index}>{tech}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div onClick={() => setModal(false)}>
                    <ImCross className='Cross-icon' />
                </div>
            </div>

        </>
    );
};

export default Portfolio_section;