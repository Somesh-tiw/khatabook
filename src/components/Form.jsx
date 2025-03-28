import React, { useContext, useEffect, useState } from 'react'
import { use } from 'react'
import HisabContext from '../context/HisabContext'
  
const Form = () => {
    const {addtransition,edit ,updatedTransition}=useContext(HisabContext)
    const [text,settext]=useState("")
    const [amount,setamount]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        !edit.isedit ? addtransition(text, parseInt(amount)):updatedTransition({id:edit.transition.id,text,amount:parseInt(amount)})
        settext("")
        setamount("")
    }

    useEffect(()=>{
        settext(edit.transition.text)
        setamount(edit.transition.amount)
    },[edit])
   

  return (
    <form className='p-15' onSubmit={handleSubmit}>
      <input type="text"
      
      placeholder='Enter Transition '
      onChange={(e)=>settext(e.target.value)}
      className='w-full border-2 border-gray-400 my-2  p-2 rounded'
      value={text}
       />
      <input
       type="number"
       onChange={(e)=>setamount(e.target.value)}
      placeholder='Enter Amount'
      className='w-full border-2 border-gray-400  my-2 p-2 rounded' 
      value={amount}
      />
      <button className='border w-full py-3 bg-black text-lg rounded font-bold text-white '>Save Transition</button>
     </form>
  )
}

export default Form