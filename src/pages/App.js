import React from 'react'
import Navbar from '../components/Navbar'
import Array from '../components/Array'
import Footer from '../components/Footer'
import Cover from '../components/Cover'

function App() {
  return (
    <>
      <Navbar />
      <Cover image="image.png" title="Chez vous, partout et ailleurs" />
      <Array />
      <Footer />
    </>
  )
}

export default App
