import './App.css';
import React from 'react';
import Header from './home/header/Header';
import Bar from './home/bar/Bar';
import Main from './home/main/Main';
import Dialogs from './home/dialogs/Dialogs';
import NavLink from 'react-router-dom'


const App = () => {
  return (
    // <BrowserRouter>
    
    <div className='home'>
      <Header />
      <Bar />
      <div className='home-dialogs'>
        <NavLink></NavLink>
        <Dialogs />
        <Main />
      </div>
    </div>
    
  )
}

export default App;
