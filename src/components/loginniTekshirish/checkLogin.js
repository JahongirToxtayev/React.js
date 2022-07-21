import React from 'react'
import { useState } from 'react'
import { Kirish } from './Kirish'
import { useEffect } from 'react'

export const CheckLogin = () => {
    const user={
        login:"qwerty",
        parol:'12345'
    }
      const [check, setCheck] = useState(true)
      const [log, setLog] = useState(0)
      const [pass, setPass] = useState(0)
      const [DataFetch, setDataFetch] = useState([])


      useEffect(() => {
        async function sorov() {
        let data= await fetch("https://myjson.dit.upm.es/api/bins/g2b7")
        .then(qiymat=>{
            setDataFetch(qiymat.json())
        })
            
        }

    sorov()

    }, [])
      console.log(DataFetch);

    const tekshirish=()=>{
        // {(user.login==log && user.parol==pass)&&(
        // )}
        

        
    }

  return (
    <div>
    {(check)&&(<div className="container text-center">
            <input type="text" placeholder='login' className='form-control my-3 ' onInput={(qiymat)=>{setLog(qiymat.target.value)}}/>
            <input type="password" placeholder='parol'  className='form-control ' onInput={(qiymat)=>{setPass(qiymat.target.value)}}/>
    <button className='btn btn-warning mt-3' onClick={tekshirish}>Log In</button> 

        </div>)}

        {(!check)&& <Kirish userInfo={user}/>
        
        }
    </div>
  )
}
