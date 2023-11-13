import React from "react";
import classesMain from './Main.module.css'
import PostSection from "./postSection/postSection";

const Main = () => {
  return(<section className={classesMain.main}>
    <div>
      <img src="https://www.rhino.com/sites/g/files/g2000012691/files/styles/article_image/public/2020-03/ODB1%20Photo%20Credit%20Danny%20Clinch.jpg?itok=ZKoaaI-T" alt="O.D.B. face" />
    </div>
    <div>
      ava + description
    </div>
    <PostSection />
  </section>

  )
}

export default Main