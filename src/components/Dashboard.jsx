import React, { useContext, useState } from 'react'
import HisabContext from '../context/HisabContext'

const Dashboard = () => {
  const {transition}=useContext(HisabContext)

  const income = transition.filter((transition) => transition.amount > 0).reduce((p, c) => p + c.amount, 0)

  const expanse = transition.filter((transition) => transition.amount < 0).reduce((p, c) => p + c.amount, 0)

  const Balance = transition.reduce((p, c) => p = c.amount, 0)
  console.log(Balance)

  // const =transition.filter((transition)=>transition.amount>0).reduce((p,c)=>p+c.amount,0)



  return (
    <div className="px-15  grid grid-cols-3 gap-3">
      <div className="bg-green-600 p-5 flex items-center justify-center flex-col rounded">
          <h1 className='text-white  text-4xl font-bold '>Income:</h1>
          <h1 className='text-white  text-4xl font-bold '>{income}</h1>
      </div>

      <div className="bg-red-600 p-5  flex items-center justify-center flex-col rounded">
          <h1 className='text-white  text-4xl font-bold '>Expence:</h1>
          <h1 className='text-white  text-4xl font-bold '>{expanse}</h1>
      </div>

      <div className="bg-yellow-400 flex items-center justify-center flex-col p-5 rounded ">
          <h1 className="text-white  text-4xl font-bold ">Balance:</h1>
          <h1 className="text-white text-4xl font-bold  ">{Balance}</h1>
      </div>

    </div>
  )
}

export default Dashboard