import React from 'react';
import {Link} from "react-router-dom";
import LinkButton from "../../HomePage/Components/LinkButton";

const postImageUrl = "/resources/image/l2/png/featured-job-logo-1.png"

const postContentStyle = " pt-7 px-12 pb-2 light-mode-texts bg-white rounded hover-shadow-3"
const postUpperContentStyle = "media align-items-center"
const postTitleStyle = "font-size-6 heading-default-color"
const postSubtitleStyle = "font-size-3 text-default-color line-height-2"
const postImageStyle = "square-72 d-block mr-8"

const tagListStyle = "d-flex list-unstyled mr-n3 flex-wrap"
const tagStyle = "bg-regent-opacity-15 min-width-px-96 mr-3 text-center rounded-3 \
                  px-6 py-1 font-size-3 text-black-2 mt-2"
const tabButtonStyle = "btn col-3 text-uppercase rounded-3"

const Post = (props) => {

  const tags = ["Python","Django","React"]
  return (
      <div className="col-6 mb-8 mt-5 pt-3">
        <div onClick={()=>props.setPost(props.index)} style={{cursor:"pointer"}} className={postContentStyle}>
          <div className="row">
            <div className={postUpperContentStyle}>
              <div className={postImageStyle}>
                <img src={props.post.company.image} style={{ maxWidth:"90%", maxHeight:"90%"}}/>
              </div>
              <div>
                <h3 className="mb-0">
                <Link to={`/posts/${props.post.id}/tasks/`} className = {postTitleStyle}>{props.post.position}</Link>
                </h3>
                <Link to="/companies/:id" className={postSubtitleStyle}>
                  {props.post.company.name}
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-10">
            <ul className={tagListStyle}>
              {tags.map((tag, index) => (
                <li>
                  <a className = {tagStyle}>
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Post;
