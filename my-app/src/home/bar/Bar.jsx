import React from "react";
import classesBar from './Bar.module.css'

const Bar = () => {
  return( <nav className={classesBar.bar}>
    <div className={classesBar.item}>
      <a href='../Main'> Home </a>
    </div>
    <div className={classesBar.item}>
      <a href='/Dialogs'> Message </a>
    </div>
    {/* <div className={classesBar.item}>
      <a>News</a>
    </div>
    <div className={classesBar.item}>
      <a>Musik</a>
    </div>
    <div className={classesBar.item}>
      <a>Settings</a>
    </div> */}
  </nav>
    
  )
}

export default Bar