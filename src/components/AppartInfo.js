import '../styles/AppartInfo.css'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import Footer from '../components/Footer'
import AppartDescription from './AppartDescription'
import Carousel from './Carousel'

function AppartInfo() {
  const { appartId } = useParams()
  const idFilter = data.find((appart) => appart.id === appartId)
  return (
    <>
      <Carousel />
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
          <AppartDescription
            title={<h3>Description</h3>}
            description={idFilter.description}
          />
          <AppartDescription
            title={<h3>Équipements</h3>}
            description={idFilter.equipments.map((equipments) => (
              <li className="equip">{equipments}</li>
            ))}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AppartInfo
