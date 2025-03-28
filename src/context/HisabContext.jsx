import { createContext, useState } from "react";

const HisabContext=createContext();

export const HisabProvider=({children})=>{
    const [transition,settransition]=useState([{
        id:1,
        text:"Salary",
        amount:150000,
      },
      {
        id:2,
        text:"Rent",
        amount:-50000,
      },
      {
        id:3,
        text:"Grocery",
        amount:-10000,
      },
      {
        id:4,
        text:"Dividend",
        amount:2500,
      },
      {
        id:5,
        text:"Car EMI",
        amount:-55000,
      }
    
    ])
    
    const [edit,setedit]=useState({transition:{},isedit:false})
    const addtransition=(text,amount)=>{
      settransition([{id:crypto.randomUUID(),text, amount},...transition])
    }
    
    const removeTransition=(id)=>{
      settransition(transition.filter((transition)=>transition.id!==id))
    }
    
    
    const editTodo=(oldtransition)=>{
     setedit({transition:oldtransition,isedit:true})
    }
    
    const updatedTransition=(updated)=>{
      settransition(transition.map((transition)=>transition.id===updated.id?updatedTransition:transition))
      setedit({transition:{},isedit:false})
    }

   return(
    <HisabContext.Provider value={{transition,edit,addtransition,removeTransition,editTodo,updatedTransition}}>
        {children}
    </HisabContext.Provider>
   )
}


export default HisabContext
