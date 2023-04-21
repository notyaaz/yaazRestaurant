import React from 'react'
import { Navbar, Landing, About, Menu,Chef, Video, Laurents, Gallery, FindUs, Footer } from './components'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <About/>
      <Menu/>
      <Chef/>
      <Video/>
      <Laurents/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}
