import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import "./style.css"
import { AiFillHeart, AiFillShop,AiFillStar,AiOutlineHeart } from 'react-icons/ai'

export const Main = () => {


    const [data, setData] = useState([])
    // const [defaultValue, setdefaultValue] = useState(" ")
    const [korzina, setkorzina] = useState([])
    const [inputValue, setinputValue] = useState("")

    useEffect(() => {
        axios.get(`http://myjson.dit.upm.es/api/bins/5pha`)
        .then (function (qiymat) {
          console.log("Natija keldi  =>",qiymat.data);
          setData(qiymat.data)
        })
      .catch((err)=>{
          console.log("Error keldi => ",err);
      })
        
        
      }, [])
     
const Like = (v, i) => {

        let vaqtincha = [...data]
        vaqtincha[i].like = !v;
        setData(vaqtincha)

    
    }
    const korzinaFnc=(i)=>{
        let a=[]
        a.push(data[i])
        setkorzina(a)
    }
     
    //   const handleChange = event => {
    //     setdefaultValue(event.target.value);
    //   };
      
    console.log(korzina);
        
    //  useEffect(() => {
    //     let results= data.filter(soz=>{
    //         return soz.name.toLowercase().includes(defaultValue.toLocaleLowerCase())
    //       })
    //       setData(results)
    //       console.log(results);
    //  }, [])
     
    const Filtering=(soz)=>{
        setinputValue(soz)
        let FilteringData =data.filter(a=>{
            return a.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        })
        setData(FilteringData)
    }

  return (
    <div>
        <div className="container">
        <div className="header d-flex justify-content-between my-4">
        <div className="qpick-icon">
        <h2 className="qpick">QPICK</h2>
        </div>
        <div className="input d-flex justify-content-around" >
        <input type="text" className="form-control h-75" placeholder="Search" onInput={(v)=>Filtering(v.target.value)}/>
    </div>
    <div className="like-trash_icons">
        <button className="like-btn position-relative btn btn-light mx-2">
            <AiFillHeart className='fs-3'/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {data.length}
                <span className="visually-hidden">unread messages</span>
              </span>
        </button>
       
        <button className="cart-btn position-relative btn btn-light mx-2">
            <AiFillShop className='fs-3'/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-kor">
                {korzina.length}
                <span className="visually-hidden">unread messages</span>
              </span>
        </button>
    </div>
    </div>


    <div className="row my-3">
    

    {
        data.map((v,i)=>{
            return <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <div className="card my-4 shadow">
            <div className="image-div d-flex justify-content-center">
        <img src={v.img} alt="" className="product-image"/>
    </div>
    
            <div className="body-card mx-3">
            <div className="bodycard-div">
            <div className="h-div">
                <div className="name-cost d-flex justify-content-between">
                <div className="product-name">
                    <h3 className="text-center">{v.name}</h3>
                </div>
                <div className="product-cost">
                    <h4>{v.cost}$</h4>
                </div>
            </div>
        
            <div className="like-part d-flex justify-content-between pb-2">
            <div className="star-div">
            <p className="fs-4"><AiFillStar className='text-warning'/> 4.7</p>
            </div>
            <div className="like-btn-div">
            <button className="tugma" onClick={() => Like(v.like, i)}>
                                                <span className={`${(v.like) ? "d-block text-danger" : "d-none"}`}> <AiFillHeart /></span>
                                                <span className={`${(v.like) ? "d-none" : "d-block text-dark"}`}> <AiOutlineHeart /></span>

                                            </button>            </div>
            </div>
            <div className="purchase-btn d-flex justify-content-center">
            <button className="btn btn-warning mb-3 purchase" onClick={()=>korzinaFnc(i)}>Purchase</button>
        </div>
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