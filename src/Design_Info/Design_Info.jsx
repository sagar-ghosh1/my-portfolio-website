import './Design_Info.css'
import sec1 from '../assets/sec-1.png'
import sec2 from '../assets/sec-2.png'
import sec3 from '../assets/sec-3.png'

const Design_Info = () => {
    return (
        <section className="Design_Info" id="abo">
            <div className="containers">
                <div className="row">

                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="details-style">
                            <img src={sec2} alt="image" />
                            <h3>High Quality</h3>
                            <p>High-quality website design work includes thoughtful user experience, careful attention to visual appeal.</p>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="zoom-in-down" data-aos-duration="1500">
                        <div className="details-style">
                            <img src={sec1} alt="image" />
                            <h3>Pixel Perfect</h3>
                            <p>Pixel perfect refers to the meticulous attention to detail in web design and development.</p>
                        </div>
                    </div>



                    <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="details-style">
                            <img src={sec3} alt="image" />
                            <h3>Perfect Idea</h3>
                            <p>Create intuitive user interfaces. Make sure the navigation is easy to understand and navigate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Design_Info;