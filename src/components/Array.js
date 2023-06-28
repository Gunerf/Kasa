import React from 'react'
import '../styles/Array.css'
import data from '../data/logements.json'
import Appart from './Appart'

function Array() {
  console.log(data)
  return (
    <div className="background">
      <Appart />
      <Appart />
      <Appart />
      <Appart />
      <Appart />
      <Appart />
    </div>
  )
}

export default Array
