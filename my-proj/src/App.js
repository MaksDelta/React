import './App.css';
import React from 'react';
import Header from './home/header/Header';
import Bar from './home/bar/Bar';
import Main from './home/main/Main';
import Dialogs from './home/dialogs/Dialogs';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
// import {NavLink , Route, Router, } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='home'>
          <Header />
          <Bar />
          <div className='home-content'>
            <Routes>
              <Route path='/Main' Component={Main} />
              <Route path='/Dialogs' Component={Dialogs} />
            </Routes>
          </div>
      </div>  
    </BrowserRouter>
  )
}

export default App;
