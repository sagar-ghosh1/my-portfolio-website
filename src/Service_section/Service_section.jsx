import './Service_section.css'
import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 65,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.0,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Service_section = () => {
    return (
        <section className="service-section" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="what-is">
                            <h2>what i do</h2>
                            <div className="separator"></div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="zoom-in-right" data-aos-duration="1500">
                        <Tilt options={defaultOptions}>
                            <div className="workout">
                                <i className="fas fa-code"></i>
                                <div className="workit">
                                    <h2>Front-end Development</h2>
                                    <p> Front-end developers often work closely with designers, and having an eye for design is beneficial. They can interpret design mockups or wireframes accurately and ensure that the final implementation matches the intended visual aesthetic.</p>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    <div className="col-lg-6" data-aos="zoom-in-up" data-aos-duration="1500">
                        <Tilt options={defaultOptions}>
                            <div className="workout">
                                <i className="fas fa-tools"></i>
                                <div className="workit">
                                    <h2>Wordpress Customization</h2>
                                    <p>WordPress developers can customize existing themes or create custom themes from scratch. They possess expertise in HTML, CSS, and PHP to modify the appearance and functionality of WordPress themes to match specific requirements.</p>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    <div className="col-lg-6" data-aos="zoom-in-down" data-aos-duration="1500">
                        <Tilt options={defaultOptions}>
                            <div className="workout">
                                <i className="fas fa-sliders-h"></i>
                                <div className="workit">
                                    <h2>Server Side</h2>
                                    <p>Strong server-side developers are experienced in working with frameworks Express.js (Node.js). They leverage these frameworks to build scalable server-side applications efficiently.Server-side developers excel in building Application Programming Interfaces (APIs) that allow different software systems to communicate and exchange data. </p>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1500">
                        <Tilt options={defaultOptions}>
                            <div className="workout">
                                <i className="fas fa-lock"></i>
                                <div className="workit">
                                    <h2>Database Management</h2>
                                    <p>Server-side developers are skilled in working with databases, including SQL-based databases like MySQL as well as NoSQL databases like MongoDB or Cassandra. They can design and optimize database schemas, write complex queries, and handle data storage and retrieval.Strong database professionals possess expertise in database design. </p>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service_section;