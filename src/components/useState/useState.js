import React from 'react'
import { useState } from 'react'

export const UseStateda = () => {
  const [bir, setBir] = useState(0)
  const [ikki, setIkki] = useState(0)
  const [plusOne, setPlusOne] = useState(0)
  const [minusOne, setMinusOne] = useState(0)


  function plus() {
    setPlusOne(bir+ikki)
  }
  const minus=()=>{
    setPlusOne(bir-ikki)
  }

  return (
    <div className='App'>
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <input type="text" className='form-control mt-5' onInput={(qiymat)=>{setBir(parseFloat(qiymat.target.value))}}/>
          <input type="text" className='form-control mt-5 mb-2' onInput={(qiymat)=>{setIkki(parseFloat(qiymat.target.value))}}/>

        </div>
      </div>
      <button className='btn btn-success' onClick={plus}>+</button>
      <button className='btn btn-warning ms-2' onClick={minus}>-</button>
      <h1 className='text-center'>=</h1>
      <h1 className='text-center'>{plusOne}</h1>

      </div>
  )
}
