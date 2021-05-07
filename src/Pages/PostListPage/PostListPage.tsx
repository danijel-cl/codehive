import React, { useState, useEffect } from 'react';

import Post from "./Components/Post"
import PostTab from "./Components/PostTab"
import PostFilter from "./Components/PostFilter"

import {http} from "../../api/http"


const loadContentStyle = "text-center pt-13"
const loadTextStyle = "text-green font-weight-bold text-uppercase font-size-3 \
                       d-flex align-items-center justify-content-center"
const loadIconStyle = "fas fa-sort-down ml-3 mt-n2 font-size-4"


export const PostListPage = () => {

  const [post, setPost] = useState(0);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    http.getAllPosts()
      .then(
        (data) => {
          setPosts(data);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  return (
    <div className="bg-default-1 pt-30 pb-10">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-1">
            <PostFilter />
            <div className="pt-12">
              <div className="row">
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
                {posts.map((post, index) => (
                  <Post key={index} index={index} post={post} setPost={setPost}/>
                ))}
              </div>
              <div className={loadContentStyle}>
                <a className={loadTextStyle}>
                  Load More
                  <i className={loadIconStyle} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4" style={{ position: "sticky", top: "15vh"}}>
            { posts.length !== 0 &&
              <PostTab post = {posts[post]}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
