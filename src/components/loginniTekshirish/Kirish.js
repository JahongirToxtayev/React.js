import React from 'react'

export const Kirish = (props) => {
    console.log(props.userInfo);
  return (
    <div><h1 className='text-center'>Xush kelibsiz {props.userInfo.login}</h1></div>
  )
}
