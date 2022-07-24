import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
const axios = require('axios').default;

export const KeyApi = () => {
    const [apidata, setApidata] = useState([])
    const Key="51cc7f5f459038d8f6fd27150449d6a1"
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${Key}&language=en-US&page=1`)
  .then(function (qiymat) {
    console.log(qiymat.data.results);
    setApidata(qiymat.data.results)
  })
  .catch(function (error) {
    console.log("eorrroe");
  });
      }, [])

  return (
    <div>
        <div className="container">
                <div className="row">
               { apidata.map((v,i)=>{
            return <div className="col-3 my-3">
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/original${v.profile_path}`} alt="" />
                <div className="body-card">
                    <h1 className='text-center'>
                    {v.name}
                    </h1>
                    <Link to={`more/${v.id}`}>Id otish</Link>
                </div>
            </div>
        </div>
        })}
                </div>
            </div>
       {
        
        
       }
        
    </div>
  )
}
