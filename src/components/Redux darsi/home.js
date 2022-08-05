 import React from 'react'
 import { useSelector,useDispatch } from 'react-redux'
 import "./style.css"
import { useEffect,useState } from 'react'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';



 export const Home = () => {
  const source=useSelector(state=>state)
  console.log("first",source);
  const dispatch=useDispatch()

  const [Bir, setBir] = useState("")
  const [Ikki, setIkki] = useState("")
  const [Uch, setUch] = useState("")



  const axios = require('axios').default;
  useEffect(() => {
    axios.get('http://myjson.dit.upm.es/api/bins/agxi')
  .then(function (response) {
    const action={type:"All_DATA",payload:response.data}
    dispatch(action)
  })
  .catch(function (error) {
    console.log(error);
  })
  
  }, [])
  
  const Add=()=>{
    const action={type:"Input_data",payload:{FirstName:Bir,LastName:Ikki,Age:Uch,Like:false}}
    dispatch(action)
  }

  const Like=(i)=>{
    const action={type:"Like",payload:i}
    dispatch(action)
  }
  const Del=(i)=>{
    const action={type:"Del",payload:i}
    dispatch(action)
  }
  
   return (
     <div>
      <div className="container ">
        <div className="row d-flex justify-content-center">
        <div className="col-8 row pt-3 pb-5 mt-5 d-flex justify-content-center">
        <div className="col-3">
        <input className='form-control' type="text"  placeholder='First Name' onInput={(v)=>{setBir(v.target.value)}}/>
        </div>

      <div className="col-3">
      <input className='form-control' type="text"  placeholder='Last Name' onInput={(v)=>{setIkki(v.target.value)}}/>
      </div>

      <div className="col-3">
      <input className='form-control' type="text"  placeholder='Age' onInput={(v)=>{setUch(v.target.value)}}/>
      </div>
      
      <div className="col-3">
      <button className='btn btn-warning mx-2' onClick={Add}>Add</button>
      </div>
        
    {source.map((v,i)=>{
      return <div className="col-11 bg-success my-4 row d-flex align-items-center" key={i}>
        <div className="col-3 " >
          <p className='fs-4 text-light'>
            {v.FirstName}
          </p>
        </div>
        <div className="col-3">
          <p className='fs-4 text-light'>
            {v.LastName}
          </p>
        </div>
        <div className="col-3">
          <p className='fs-4 text-light'>
            {v.Age}
          </p>
        </div>
        <div className="col-3 row d-flex align-items-center">
          <button className='btn col-5' onClick={()=>{Like(i)}}>
          <span className={`${(v.Like) ? "d-block text-danger" : "d-none"} fs-3 mb-3`}> <AiFillHeart /></span>
          <span className={`${(v.Like) ? "d-none" : "d-block text-dark"} fs-3 mb-3`}> <AiOutlineHeart /></span>
          </button>
          <button className='btn col-5'>
            <p className='fs-3 text-primary' onClick={()=>{Del(i)}}><RiDeleteBin5Fill/></p>
          </button>
        </div>
      </div>
    })}

        </div>
      

        </div>

      </div>
     </div>
   )
 }
 