import './App.css';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  {UseStateda} from "./components/useState/useState";

import React from 'react'
import { CheckLogin } from './components/loginniTekshirish/checkLogin';
import { KeyApi } from './components/KeyApi/KeyApi';

const App = () => {
  return (
    <div>
      {/* <UseStateda/> */}
      {/* <CheckLogin/> */}
      <KeyApi/>
    </div>
    
  )
}

export default App
