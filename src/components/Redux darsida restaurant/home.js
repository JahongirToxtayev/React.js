import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {

   const data= useSelector(state=>state)
   console.log(data);
  return (
    <div> 
        <h1>home</h1>
    </div>
  )
}
