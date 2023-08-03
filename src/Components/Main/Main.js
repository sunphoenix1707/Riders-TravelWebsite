import React from 'react'
import {useEffect} from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Asset/img1.jpg'
import img2 from '../../Asset/img2.jpg'
import img3 from '../../Asset/img3.jpg'
import img4 from '../../Asset/img4.jpg'
import img5 from '../../Asset/img5.jpg'
import img6 from '../../Asset/img6.jpg'
import img7 from '../../Asset/img7.jpg'
import img8 from '../../Asset/img8.jpg'
import img9 from '../../Asset/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
  {
    id:1,
    imgSrc: img,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    descrption: 'The Epitome of Romence,Bora Bora is one of the best travel destinations in world. The Place is known for its luxurious stays and advanture activities'
    

  },
  {
    id:2,
    imgSrc: img2,
    desTitle: 'Machu pichu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    descrption: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu the so-called Lost city of Incas. This place is popular among tourists as the sunrise from sungate is simply spectacular'
  },
  {
    id:3,
    imgSrc: img3,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    descrption: 'One of the most remarkable Australian Natural gifts is the Great Barrier Reef.The Hallmark of this place is beauty and love.Always Interesting to be in this place'
  },
  {
    id:4,
    imgSrc: img4,
    desTitle: 'Capadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    descrption: 'According to the World Tourism Ranking, 45 million people visit turkey each year, and from that about 2 million come to visit Cappadocia.This Place is known for its luxurious stays and advanturous activities'
  },
  {
    id:5,
    imgSrc: img5,
    desTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    descrption: 'A City in Central Mexico, Guanajuato is known for its history of silver mining and colonial architecture.The Houses in the city are very attractively painted with the most bright colors available.Always Welcome'
  },
  {
    id:6,
    imgSrc: img6,
    desTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    descrption: 'Cinque Terre,is a place and people enter your heart.Each village of the Cinque Terre is unique and worth visiting.Its peeling pastel buildings march down a steep ravine to a tiny harbor – the region favorite postcard view – and glow romantically at sunset, which is best appreciated from the sea.'
  },
  {
    id:7,
    imgSrc: img7,
    desTitle: 'Angkot',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    descrption: 'The vast religious complex of Angkor Wat comprises more than a thousand buildings, and it is one of the great cultural wonders of the world. Angkor Wat is the world largest religious structure, covering some 400 acres (160 hectares), and marks the high point of Khmer architecture.'
  },
  {
    id:8,
    imgSrc: img8,
    desTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    descrption: 'One of the Seven Wonders of the World, the Taj Mahal in Agra is among the most visited monuments on the planet. This white marble architecture is a symbol of undying love and affection of a husband for his dead wife. The monument was commissioned by the Mughal emperor Shah Jahan for his beloved wife, Mumtaz Mahal.'
  },
  {
    id:9,
    imgSrc: img9,
    desTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$590',
    descrption: 'As an island, Bali is of course famous for its beautiful beaches of all types, from the warm sand, and calm beaches to rocky spots with magnificent surf waves. But the island is also home to green mountains, rice field terraces, and cool villages, such as Kintamani..'
  },

]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section'>

    <div className='secTitle'>
      <h3 data-aos="fade-right"
      className='title'>
        Most Visited Destinations
       </h3>
    </div>

     <div className='secContent grid'>
      {
        Data.map(({id,imgSrc,desTitle,location,grade,fees,descrption})=>{
                  return(
                    <div key={id} 
                    data-aos="fade-up"
                    className='singleDestination'>
                      <div className="imageDiv">
                        <img src={imgSrc} 
                        alt={desTitle}  />

                      </div>
                    <div className='cardInfo'>
                      <h4 className='desTitle'>{desTitle}</h4>
                     <span className='content flex'>
                        <HiOutlineLocationMarker className='icon'/>
                        <span className='name'>{location}</span>
                     </span>
                        <div className='fees flex'>
                          <div className='grade'>
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className='price'>
                            <h5>{fees}</h5>
                            </div>
                            </div>
                             <div className="desc">
                              <p>{descrption}</p>
                             </div>
                             <button className='btn flex'>
                              DETAILS <HiOutlineClipboardCheck className='icon'/>
                             </button>

                      
                    </div>
                    </div>
                              
                  )
        })
      }

     </div>
    </section> 
  )
}
export default Main