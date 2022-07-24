import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './main.css'
import { FaEye, FaFlagUsa, FaStar, FaThumbsUp } from "react-icons/fa";

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
                    <div className="col-4 my-5 d-flex justify-content-start" >
            <div className="card shadow me-4 card2">
                <img className='movie2-image' src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" />  
            </div>
        </div>

        <div className="col-8 my-5">
          <h1>{data.title}</h1>
          <h5 className='text-secondary'>{data.release_date}, USA</h5>
          <div className="circles d-flex justify-content-around mt-5 mb-3">
          <div className="circle d-flex justify-content-center align-items-center text-light fs-3"><FaThumbsUp/></div>
          <div className="circle d-flex justify-content-center align-items-center text-light fs-3"><FaStar/></div>
          <div className="circle d-flex justify-content-center align-items-center text-light fs-3"><FaFlagUsa/></div>
          <div className="circle d-flex justify-content-center align-items-center text-light fs-3"><FaEye/></div>
          </div>
          <div className="circle-titles d-flex justify-content-around">
            <div className="circle-title ms-2"><h5>{data.vote_count}</h5></div>
            <div className="circle-title ms-5"><h5>{data.vote_average}</h5></div>
            <div className="circle-title ms-5"><h5>{data.original_language}</h5></div>
            <div className="circle-title ms-3"><h5>{data.popularity}</h5></div>

          </div>
          <div className="overview mt-5">
          <h2>Overview</h2>
          <p className='text-secondary fs-4'>{data.overview}</p>
          </div>

        </div>
                
            </div>
        </div>
    </div>
  )
}
