import React from 'react';
import GridPost from "../Components/GridPost"

const GridPostList = () => {
  return (
    <div className="pt-6">
      <div className="row justify-content-center">
        <GridPost />
        <GridPost />
      </div>
    </div>
  );
};

export default GridPostList;
