import React from "react";
import Post from "./Post/Post";
import classesPostSection from "./postSection.module.css";

const PostSection = () => {
  return(<div className={classesPostSection.item}>
      my post
      <div>
        new post
        <textarea name="New Post" id="" cols="40" rows="5"></textarea>
        <button>Add new post</button>
      </div>
      <Post message = 'Hi, how are you' />
      <Post message = "i'm fine" />
      <Post message = 'okay'/>

    </div>
    )
}

export default PostSection