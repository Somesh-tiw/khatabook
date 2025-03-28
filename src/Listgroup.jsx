import React, { useContext } from 'react'
import Listitem from './Listitem'
import HisabContext from './context/HisabContext'

const Listgroup = () => {
  const {transition}=useContext(HisabContext)
  return (
    <ul className=' p-15 '>
     {
        transition.map((transition)=>{
            return  <Listitem transition={transition}  />  
        })
     }

   </ul>
  )
}

export default Listgroup