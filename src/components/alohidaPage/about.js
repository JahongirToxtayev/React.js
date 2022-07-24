import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './main.css'

export const About = () => {
    const [data, setdata] = useState([])
    const ID=parseInt(useParams().id)
    console.log(ID);
    const myKey="51cc7f5f459038d8f6fd27150449d6a1"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`)
        .then (function (qiymat) {
          console.log(qiymat.data.results);
          setdata(qiymat.data.results)
          console.log(data);
          let a=qiymat.data.results.filter((soz)=>{
            return soz.id==ID
          })
          setdata(...a)
        })
      .catch((err)=>{
          console.log(err);
      })
        
        
      }, [])
  return (
    <div>
        <div className="container">
            <div className="row">
                    <div className="col-8 my-5 d-flex justify-content-center" >
            <div className="card shadow">
                <img className='movie2-image' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />  
            </div>
        </div>
                
            </div>
        </div>
    </div>
  )
}
