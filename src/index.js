import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Main } from './components/alohidaPage/main';
import {About} from './components/alohidaPage/about'
import  "bootstrap/dist/css/bootstrap.min.css";
import { Home } from './components/Redux darsida restaurant/home';
// import { Main } from './components/1-Imtihon React/main';
 

  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/about/:id' element={<About/>} />
        <Route path='/' element={<Main/>} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
