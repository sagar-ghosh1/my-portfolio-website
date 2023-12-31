import './Header.css'
import logo from '../assets/idea.png'
import resume from "../../src/assets/Sagar_Ghosh_Resume.pdf"
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [headColor, setHeadColor] = useState(false);
  const [active, setActive] = useState("home");

  const changColor = () => {
    if (window.scrollY > 50) {
      setHeadColor(true)
    } else {
      setHeadColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changColor);

    return () => {
      window.removeEventListener("scroll", changColor);
    }
  }, [])

  return (
    <header className={`${headColor ? "header stick" : "header"}`}>
      <nav>
        <a href="" className="logos">
          <img src={logo} className="simage" alt="logo" /> Sa<span>gar</span>
        </a>

        <div className={`${toggle ? "menu active" : "menu"}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setActive("home")} className={`${active === "home" ? "action" : ""}`}>Home</a>
            </li>
            <li>
              <a href="#abo" onClick={() => setActive("abo")} className={`${active === "abo" ? "action" : ""}`}>About</a>
            </li>
            <li>
              <a href="#about" onClick={() => setActive("about")} className={`${active === "about" ? "action" : ""}`}>Skills</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setActive("portfolio")} className={`${active === "portfolio" ? "action" : ""}`}>portfolio</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setActive("contact")} className={`${active === "contact" ? "action" : ""}`}>contact</a>
            </li>
            <li>
              <div className="button">
                <a href={resume} className="send-email" download>
                  <span className="Resume">Download Resume</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        {
          toggle ? <RxCross2 className='icon' onClick={() => setToggle(!toggle)} /> :
            <HiMenuAlt3 className='icon' onClick={() => setToggle(!toggle)} />
        }
      </nav>
    </header>
  );
};

export default Header;