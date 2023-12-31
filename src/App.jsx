import { useEffect, useState } from 'react'
import About_section from './About_section/About_section'
import './App.css'
import Banner_section from './Banner-section/Banner_section'
import Contact_section from './Contact_section/Contact_section'
import Design_Info from './Design_Info/Design_Info'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import Scroll_Indicator from './Scroll_Indicator/Scroll_Indicator'
import loader from './assets/R.gif'
import Portfolio from './Portfolio/Portfolio'
import About from './About/About'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (
    <div>
      {loading ?
        <div className='loader'>
          <img src={loader} alt="" className='image' />
        </div> :
        <>
          <Scroll_Indicator />
          <ScrollToTop />
          <Header />
          <Banner_section />
          <About></About>
          <Design_Info />
          <About_section />
          <Portfolio />
          <Contact_section />
          <Footer />
        </>
      }
    </div>
  )
}

export default App;