import { useEffect, useState } from 'react';
import './ScrollToTop.css';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);

    const goToBtn = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const listenToScroll = () => {

        const winScrolls = document.documentElement.scrollTop;
        const scrollHight = document.documentElement.scrollHeight;
        const clientHight = document.documentElement.clientHeight;

        const hight = scrollHight - clientHight;
        const scrolled = (winScrolls / hight) * 100;
        // console.log(scrolled)
        setScroll(scrolled)


        let hightToScroll = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > hightToScroll) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
    }, [])

    return (
        <div className={`${visible ? "ScrollTop scroller" : "ScrollTop"}`} onClick={goToBtn} style={{ background: `conic-gradient( #42275a  ${scroll}%, #bdc3c7 ${scroll}%` }} >
            <button className='btnIcon'><AiOutlineArrowUp /></button>
        </div>
    );
};

export default ScrollToTop;