import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-gray-500 p-3 flex justify-between items-center'>
   <h3 className='text-white text-2xl font-bold'>Khata-Book</h3>
   <button className='bg-black rounded text-lg font-semibold text-white py-2 px-5'>Submit</button>
   </nav>
  )
}

export default Navbar