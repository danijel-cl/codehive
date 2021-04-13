import React, { useState } from 'react';
import ReactSearchSelect from "./Components/ReactSearchSelect"
import RowPostList from "./Components/RowPostList"
import TabPost from "./Components/TabPost"
import TabSearch from "./Components/TabSearch"

export const posts =[{
  "position":"Product Designer",
},{
  "position":"Software Developer",
},{
  "position":"Data Scientist",
},{
  "position":"DevOps Engineer",
}];


export const PostListPage = () => {

  const [post, setPost] = useState(-1);
  console.log()

  const renderPost = () =>{
    if(post==-1){
      return <TabSearch/>
    }else{
      return <TabPost post = {posts[post]}/>
    }
  }

  return (
    <div className="site-wrapper">
      <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-1 col-12 col-md-6">
              <ReactSearchSelect />
              <div className="pt-12 ml-lg-0 ml-md-15">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="font-size-4 font-weight-normal text-default-color">
                    <span className="heading-default-color">120&nbsp;</span>results for <span className="heading-default-color">UI Designer</span>
                  </h5>
                  <div className="d-flex align-items-center result-view-type">
                    <a onClick={()=>setPost(-1)} className="heading-default-color pr-2 font-size-6 hover-text-hitgray no-border-button" style={{ cursor: 'pointer'}}>
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <RowPostList posts = {posts} setPost = {setPost}/>
                <div className="text-center pt-5 pt-lg-13">
                  <a className="text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center" href="#">
                    Load More
                    <i className="fas fa-sort-down ml-3 mt-n2 font-size-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="tab-content" style={{position: "sticky",top: "15vh"}}>
                {renderPost()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
