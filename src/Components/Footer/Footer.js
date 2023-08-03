import React from 'react'
import './footer.scss'
import video2 from '../../Asset/v.mp4.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
   <section className='footer'>
    <div className='videoDiv'>
     <video src={video2} loop autoPlay muted type="v/mp4"></video>

    </div>
    <div className='secContent container'>
      <div className='contactDiv flex'>

        <div data-aos="fade-up"
        className='text'>
          <small>Keep In Touch</small>
          <h2>Travel With Us</h2>
        </div>
        <div className='inputDiv flex'>
        
          <input data-aos="fade-up"
           type='text' placeholder='Enter Your Email Address'/>
           <button data-aos="fade-up"
           className='btn flex' type='submit'>
                SEND <FiSend className="icon"/>
           </button>

        </div>
      </div>
      <div className='footerCard flex'>
        <div className='footerIntro flex'>
          <div className='logoDiv'>
          <a href='#' className='logo flex'>
            <MdOutlineTravelExplore 
            className='icon'/> Riders.
          </a>
        </div>
       <div data-aos="fade-up"
       className='footer Paragraph'>
       Lorem ipsum dolor sit amet. Vel aliquid voluptas et nihil nostrum eos temporibus impedit. Id amet ratione et tempore quas et vero repellendus ea impedit minus aut neque cupiditate ut saepe velit.
      </div>
       <div data-aos="fade-up"
       className='footerSocials flex'>
        <AiOutlineTwitter className="icon"/>
        <AiFillYoutube className="icon"/>
        <AiFillInstagram className="icon"/>
        <FaTripadvisor className="icon"/>
       </div>
      </div>
      <div className='footerLinks grid'>
        <div data-aos="fade-up"
        data-aos-duration="3000"
        className='linkGroup'>
          <span className='groupTitle'>
            OUR AGENCY
          </span>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Services
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Insurence
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Agency
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Tourism
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Payment
          </li>
        </div>
{/* group two */}
<div className='footerLinks grid'>
        <div data-aos="fade-up"
        data-aos-duration="4000"
         className='linkGroup'>
          <span className='groupTitle'>
            PARTNERS
          </span>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Bookings
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          RentCars
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          HostelWorld
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Trivago
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          TripAdvisor 
          </li>
        </div>
        
      </div>
      {/* group three */}
      <div className='footerLinks grid'>
        <div data-aos="fade-up"
        data-aos-duration="5000"
        className='linkGroup'>
          <span className='groupTitle'>
           Last Minute
          </span>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          London
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          California
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Indonesia
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Europe
          </li>
          <li className='footerList flex'>
          <FiChevronRight className='icon'/>
          Ocenia 
          </li>
        </div>
      </div>
      </div>
        <div className='footerDiv flex'>
      <small>Best Travel Webisite Theme</small>
      <small>Copyrights Reserved-By Sunpreet-2023</small>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Footer
