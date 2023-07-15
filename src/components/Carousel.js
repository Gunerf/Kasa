import React from 'react'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'
import '../styles/AppartInfo.css'
import '../styles/Carousel.css'
import { useState } from 'react'

function Carousel() {
  const [currentPicture, setCurrentPicture] = useState(0)
  const { appartId } = useParams()
  const idFilter = data.find((appart) => appart.id === appartId)
  const imageArray = idFilter.pictures
  console.log(currentPicture)

  const imageClass = (i) => {
    if (i === currentPicture) return 'visible'
    return ''
  }

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % imageArray.length)
  }
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(imageArray.length - 1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          {imageArray.map((appart, i) => (
            <img
              className={`image-appart ${imageClass(i)}`}
              src={appart}
              alt=""
            />
          ))}
          <button className="next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button className="previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="image-number">
            {currentPicture + 1}/{imageArray.length}
          </span>
        </div>
      </div>
    </>
  )
}

export default Carousel
