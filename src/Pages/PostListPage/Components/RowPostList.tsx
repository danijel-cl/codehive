import React from 'react';
import RowPost from "../Components/RowPost"

const RowPostList = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => (
        <RowPost key={index} index={index} post={post} setPost={props.setPost}/>
      ))}
    </div>
  );
};

export default RowPostList;
