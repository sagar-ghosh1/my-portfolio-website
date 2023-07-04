import './About_section.css'
import CountUp from 'react-countup';

const About_section = () => {
    return (
        <section className='about-section' id='about'>
            <div className="containers">
                <div className="row gx-5">
                    <div className="col-lg-12">
                        <div className="about-details">
                            <h2>My Skills</h2>
                            <div className="separator3"></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="progress-title" >
                            <h2>HTML</h2>
                            <div className="progress-bars">
                                <div className="progress-speed">
                                    <div className="headbar"><CountUp start={0} end={95} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>CSS</h2>
                            <div className="progress-bars">
                                <div className="progress-speed2">
                                    <div className="headbar2"><CountUp start={0} end={90} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>Bootstrap</h2>
                            <div className="progress-bars">
                                <div className="progress-speed3">
                                    <div className="headbar3"><CountUp start={0} end={80} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>Tailwind CSS</h2>
                            <div className="progress-bars">
                                <div className="progress-speed4">
                                    <div className="headbar4"><CountUp start={0} end={85} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>Javascript</h2>
                            <div className="progress-bars">
                                <div className="progress-speed5">
                                    <div className="headbar5"><CountUp start={0} end={75} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>React Js</h2>
                            <div className="progress-bars">
                                <div className="progress-speed6">
                                    <div className="headbar6"><CountUp start={0} end={80} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="progress-title">
                            <h2>Firebase</h2>
                            <div className="progress-bars">
                                <div className="progress-speed7">
                                    <div className="headbar7"><CountUp start={0} end={78} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>Express js</h2>
                            <div className="progress-bars">
                                <div className="progress-speed8">
                                    <div className="headbar8"><CountUp start={0} end={75} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>MongoDB</h2>
                            <div className="progress-bars">
                                <div className="progress-speed3">
                                    <div className="headbar3"><CountUp start={0} end={80} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>PHP</h2>
                            <div className="progress-bars">
                                <div className="progress-speed10">
                                    <div className="headbar10"><CountUp start={0} end={65} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>MySql</h2>
                            <div className="progress-bars">
                                <div className="progress-speed11">
                                    <div className="headbar11"><CountUp start={0} end={70} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>

                        <div className="progress-title">
                            <h2>Node Js</h2>
                            <div className="progress-bars">
                                <div className="progress-speed12">
                                    <div className="headbar12"><CountUp start={0} end={60} duration={4} style={{ "color": "white" }} />%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About_section;