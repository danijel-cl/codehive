import React from 'react';
import RowPost from "../Components/RowPost"

const RowPostList = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => (
        <RowPost id={index} post={post} />
      ))}
    </div>
  );
};

export default RowPostList;
