import './App.css';
import  {UseStateda} from "./components/useState/useState";

import React from 'react'
import { Home } from './components/Redux darsi/home';
import { CheckLogin } from './components/loginniTekshirish/checkLogin';
import { KeyApi } from './components/KeyApi/KeyApi';

const App = () => {
  return (
    <div>
      {/* <UseStateda/> */}
      {/* <CheckLogin/> */}
      {/* <KeyApi/> */}
      <Home/>
    </div>
    
  )
}

export default App
