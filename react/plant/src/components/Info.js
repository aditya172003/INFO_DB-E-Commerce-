import React, { useEffect } from 'react'

import { useState ,createContext} from "react"




function Info() {






 const [Inf,setInf]=useState()
const FetchData= async()=>{
    const res= await fetch("/inf",{
      method:'GET'
    })
    const data = await res.json()
    setInf(data)
  
  
    
  }

  useEffect(()=>{
    FetchData()
  },[])
  
  return (
    <div>
      
    </div>
  )
}

export default Info
