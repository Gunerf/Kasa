import React from 'react'
import '../styles/AppartInfo.css'
import { useLocation } from 'react-router-dom'

function AppartInfo() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="appart-info">
      <div className="main-title">
        <div className="appart-title">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <h2>Paris, Île-de-France</h2>
          <div className="tags-container">
            <span className="tag">Cozy</span>
            <span className="tag">Canal</span>
            <span className="tag">Paris 10</span>
          </div>
        </div>
        <div className="appart-publicator">
          <div className="profil">
            <h3>
              <p>Alexandre</p>
              <p>Dumas</p>
            </h3>
            <div className="profil-picture"></div>
          </div>
          <div className="appart-notation">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <div className="appart-description">
          <h3>Description</h3>
          <p>
            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
            l'été et à côté de nombreux bars et restaurants. Au cœur de Paris
            avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
            voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station
            de la gare de l'est (7 minutes à pied).{' '}
          </p>
        </div>
        <div className="appart-equipements">
          <h3>Équipements</h3>
          <p>
            Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser
            Sèche-cheveux Cintres
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppartInfo
