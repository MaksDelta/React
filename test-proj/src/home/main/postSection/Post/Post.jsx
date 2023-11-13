import React from "react";
import classesPost from './Post.module.css';

const Post = (props) => {
  return(
        <div className={classesPost.item}>
          <img src="https://ew.com/thmb/owQ_Z6FwJwZTePy_VglZuGswaAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85554__odb_l-5d91ce04bd034582b7672664f4f75bc9.jpg" alt="O.D.B. post" />
          {props.message}
        </div>
        )
}

export default Post