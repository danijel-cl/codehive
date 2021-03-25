import React from 'react';
import GridPost from "../Components/GridPost"

const GridPostList = (props) => {
  return (
    <div className="pt-6">
      <div className="row justify-content-center">
        {props.posts.map((post, index) => (
          <GridPost id={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default GridPostList;
