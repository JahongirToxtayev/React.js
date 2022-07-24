import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "../alohidaPage/main.css"
import { Link } from 'react-router-dom'
import{AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
export const Main = () => {
    const [Apidata, setApidata] = useState([])
    const [like, setlike] = useState(false)

    const myKey="51cc7f5f459038d8f6fd27150449d6a1"

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US&page=1`)
      .then (function (qiymat) {
        console.log(qiymat.data.results);
        setApidata(qiymat.data.results)
        console.log(Apidata);
      })
    .catch((err)=>{
        console.log(err);
    })
      
      
    }, [])
    
    function Like() {
        setlike(!like)
    }
    
  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    Apidata.map((v,i)=>{
                        return <div className="col-3 my-5" key={i}>
            <div className="card shadow card2">
                <img className='movie-image' src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="" />
                <div className="body-card">
                    <div className="vertical-position mx-3">
                    <h3 className='text-center'>{v.title}</h3>
                    <div className="like-more_btn d-flex justify-content-between mx-3">
                        <button className='like-btn' onClick={Like}><p className={`fs-4 text-danger ${like ? "d-none": "a"}`}>{<AiOutlineHeart/>}</p>
                        <p className={`fs-4 text-danger ${!like ? "d-none" :"a"}`}>{<AiFillHeart/>} </p> </button>
                        
                    <Link to={`/about/${v.id}`} className="btn btn-warning fs-5 text-center h-50">More</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
