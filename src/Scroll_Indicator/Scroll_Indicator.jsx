import { useEffect, useState } from 'react';
import './Scroll_Indicator.css';

const Scroll_Indicator = () => {
     const [indicator, setIndicator] = useState(0);

     const scrollIndicator = () =>{
        const winScroll = document.documentElement.scrollTop;
        const scrollHight = document.documentElement.scrollHeight;
        const clientHight = document.documentElement.clientHeight;

        const hight = scrollHight - clientHight;
        const scrolled = (winScroll / hight) * 100;
        // console.log(scrolled)
        setIndicator(scrolled)
     }

     useEffect(() =>{
           window.addEventListener("scroll", scrollIndicator);

        return () =>{
            window.removeEventListener("scroll", scrollIndicator);
        }
     },[])

    return (
        <div className='progressBar'>
            <div className='Progress-line' style={{ height: `${indicator}%` }}></div>
        </div>
    );
};

export default Scroll_Indicator;