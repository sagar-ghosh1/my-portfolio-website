import './Design_Info.css'
import sec1 from '../assets/sec-1.png'
import sec2 from '../assets/sec-2.png'
import sec3 from '../assets/sec-3.png'

const Design_Info = () => {
    return (
        <section className="Design_Info" id="self">
            <div className="containers">
                <div className="row">
                    <div className="col-lg-4" data-aos="zoom-in-down" data-aos-duration="1500">
                        <div className="details-style">
                            <img src={sec1} alt="image" />
                            <h3>Pixel Perfect</h3>
                            <p>Pixel perfect refers to the meticulous attention to detail in web design and development, aiming to create a website that accurately matches the original design down to the individual pixels.</p>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="details-style">
                            <img src={sec2} alt="image" />
                            <h3>High Quality</h3>
                            <p>High-quality website design work encompasses meticulous attention to detail, thoughtful user experience, visually appealing layouts, harmonious color schemes and seamless responsiveness across various devices.</p>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="details-style">
                            <img src={sec3} alt="image" />
                            <h3>Awesome Idea</h3>
                            <p>Create a seamless and intuitive user interface. Ensure that navigation is easy to understand and navigate, allowing users to find information effortlessly.Use high-quality images and graphics that are optimized for the web.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Design_Info;