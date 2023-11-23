import React from "react";
import classesBar from './Bar.module.css'
import { NavLink } from "react-router-dom";

const Bar = () => {
  return( <nav className={classesBar.bar}>
    <div className={classesBar.item}>
      <NavLink to='/Main'> Home </NavLink>
    </div>
    <div className={classesBar.item}>
      <NavLink to='/Dialogs'> Message </NavLink>
    </div>
    <div className={classesBar.item}>
      <a href="/#">News</a>
    </div>
    <div className={classesBar.item}>
      <a href="/#">Musik</a>
    </div>
    <div className={classesBar.item}>
      <a href="/#">Settings</a>
    </div>
  </nav>
    
  )
}

export default Bar