import React from 'react'
import './App.css'
import Navbar from './Component.js/Navbar'
import Props from './Component.js/Props'
import Contact from './Component.js/Contact'
import Form from './Component.js/Form'
import Footer from './Component.js/Footer'
import Section from './Component.js/Section'

function App() {
  function create(Contact){
    // return(
    //   <Props
    //    name={Contact.name}
    //   img={Contact.img}
    //   des={Contact.des}/>

    // )
  }
  return (
    
    <div>
      <Navbar/>
      <Section/>
      <Footer/>
       {/* {Contact.map(create)} */}
      {/* <Form/> */}
    </div>
  )
}

export default App
