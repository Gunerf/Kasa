import React from 'react'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'
import '../styles/AppartInfo.css'
import '../styles/Carousel.css'

function Carousel() {
  const { appartId } = useParams()
  const idFilter = data.find((appart) => appart.id === appartId)
  const imageArray = idFilter.pictures
  console.log(imageArray)
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          {imageArray.map((appart) => (
            <img className="image-appart" src={appart} alt="" />
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel
