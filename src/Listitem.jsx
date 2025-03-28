import React, { useContext } from 'react'
import HisabContext from './context/HisabContext'

const Listitem = ({ transition }) => {
  const { removeTransition, editTodo}=useContext(HisabContext)
  return (
    <li className='bg-gray-300 my-2 p-3 flex items-center justify-between'>
      <span>
        <p className='text-xl font-bold'>{transition.text}:</p>
        <h1 className='text-xl'>{transition.amount}</h1>
      </span>
      <span className="">
        <button className='bg-green-600  px-4 py-2 mx-2 rounded text-white font-bold' onClick={() => editTodo(transition)}>edit</button>
        <button className='bg-red-500 px-4 py-2 mx-2 rounded text-white font-bold' onClick={() => removeTransition(transition.id)}>Delete</button>
      </span>
    </li>
  )
}

export default Listitem