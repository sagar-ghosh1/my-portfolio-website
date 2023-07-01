import './Resume_section.css'

const Resume_section = () => {

    return (
        <section className="resume-section" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="resume-details">
                            <h2>My Resume</h2>
                            <div className="separator-2"></div>
                        </div>
                    </div>

                    {/* Resume section part 1    */}
                    <div className="col-lg-6">
                        <div className="resume-workExp">
                            <h2>Experiences</h2>
                            <ul>
                                <li>
                                    <div className="another-heading">
                                        <h4>2022 - Running</h4>
                                    </div>
                                    <div className="another-heading-2">
                                        <h4>Thai Corner.</h4>
                                        <h5>Sales Executive</h5>
                                        <p>Achieving a dynamic and challenging job in an organization. Where I can utilize my knowledge, personal skills,  understanding of customer requirements and market trends,above all of my learning experience in order to develop my career and as well as to contribute in the wellfare of the organization.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="another-headingX">
                                        <h4>2020 - 2021</h4>
                                    </div>
                                    <div className="another-heading-2">
                                        <h4> Gemcon Food And Agricutural Product Ltd.</h4>
                                        <h5> Sales Associete, Retail Sales</h5>
                                        <p>Achieving a dynamic and challenging job in an organization. Where I can utilize my knowledge, personal skills,  understanding of customer requirements and market trends,above all of my learning experience in order to develop my career and as well as to contribute in the welfare of the organization.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="another-headingY">
                                        <h4>2018 - 2019</h4>
                                    </div>
                                    <div className="another-heading-2">
                                        <h4>Yellow By Beximco </h4>
                                        <h5>Sales Executive , Retail Store</h5>
                                        <p>Achieving a dynamic and challenging job in an organization. Where I can utilize my knowledge, personal skills,  understanding of customer requirements and market trends,above all of my learning experience in order to develop my career and as well as to contribute in the welfare of the organization.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*   Resume section part 2    */}
                    <div className="col-lg-6">
                        <div className="resume-workExp">
                            <h2>Education</h2>
                            <ul>
                                <li>
                                    <div className="another-heading">
                                        <h4>2017 - Running</h4>
                                    </div>
                                    <div className="another-heading-2">
                                        <h4>Habibullah Bahar University College</h4>
                                        <h5>B.B.A(Hon's)4th year in Department of Marketing</h5>
                                        <p>Achieving a dynamic and challenging job in an organization. Where I can utilize my knowledge, personal skills, understanding of customer requirements and market trends,above all of my learning experience in order to develop my career and as well as to contribute in the wellfare of the organization.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="another-headingX">
                                        <h4>2015 - 2017</h4>
                                    </div>
                                    <div className="another-heading-2">
                                        <h4>Uttara High School & College</h4>
                                        <h5>H.S.C in Business Studies</h5>
                                        <p>Achieving a dynamic and challenging job in an organization. Where I can utilize my knowledge, personal skills, understanding of customer requirements and market trends,above all of my learning experience in order to develop my career and as well as to contribute in the wellfare of the organization.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="another-headingY">
                                        <h4>2013 - 2015</h4>
                                    </div>
                                    <div className="another-heading-2">
                                        <h4>Kalachandpur High School & College</h4>
                                        <h5>S.S.C in Business Studies</h5>
                                        <p>Achieving a dynamic and challenging job in an organization. Where I can utilize my knowledge, personal skills, understanding of customer requirements and market trends,above all of my learning experience in order to develop my career and as well as to contribute in the wellfare of the organization.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume_section;