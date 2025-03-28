import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import Listgroup from './Listgroup'
import { HisabProvider } from './context/HisabContext'

const App = () => {
  
  
  

  return (
   <HisabProvider>
     <Navbar/>
      <Form />
      <Dashboard  />
   
      <Listgroup  /> 
      

   </HisabProvider>
  )
}

export default App