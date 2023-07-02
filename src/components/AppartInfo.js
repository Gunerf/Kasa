import React from 'react'
import '../styles/AppartInfo.css'
import { useLocation } from 'react-router-dom'
import data from '../data/logements.json'
import Cover from '../components/Cover'

function AppartInfo() {
  const location = useLocation()
  console.log('AppertId:', location.state.appartId)
  const idFilter = data.find((appart) => appart.id === location.state.appartId)
  console.log(idFilter)
  console.log(idFilter.title)
  return (
    <>
      <Cover image={idFilter.cover} />
      <div className="appart-info">
        <div className="main-title">
          <div className="appart-title">
            <h1>{idFilter.title}</h1>
            <h2>{idFilter.location}</h2>
            <div className="tags-container">
              {idFilter.tags.map((appart) => (
                <span className="tag">{appart}</span>
              ))}
            </div>
          </div>
          <div className="appart-publicator">
            <div className="profil">
              <h3>
                <p>{idFilter.host.name}</p>
              </h3>
              <div className="profil-picture">
                <img
                  className="image-profil"
                  src={idFilter.host.picture}
                  alt=""
                ></img>
              </div>
            </div>
            <div className="appart-notation">
              {[1, 2, 3, 4, 5].map((star) => (
                <span className={idFilter.rating > star ? 'on' : 'off'}>★</span>
              ))}
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="appart-description">
            <h3>Description</h3>
            <p>{idFilter.description}</p>
          </div>
          <div className="appart-equipements">
            <h3>Équipements</h3>
            {idFilter.equipments.map((equipments) => (
              <p className="equip">{equipments}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AppartInfo
