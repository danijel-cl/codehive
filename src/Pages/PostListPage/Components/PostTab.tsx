import React from 'react';
import {Link} from "react-router-dom";

const tabAnimationStyle = "tab-pane active animate__animated animate__slower animate__fadeIn"
const tabContentStyle = "bg-white rounded-4 border border-mercury shadow-9 pos-abs-xl \
                         ml-xl-8 mt-9 mt-xl-0"
const upperTabContentStyle = "pt-9 pl-15 pr-15 pb-8 border-bottom border-width-1 \
                              border-default-color light-mode-texts"
const upperTabTitleStyle = "pl-0 col-8 font-size-6 mb-0"
const upperTabSubTitleStyle = "font-size-4 text-gray line-height-2"
const tabButtonStyle = "btn btn-green col-4 text-uppercase rounded-3"
const bottomTabContentStyle = "pt-8 pl-18 pr-18 pb-10 light-mode-texts overflow-y-scroll"
const bottomTabTitleStyle = "font-size-5 font-weight-semibold text-black-2 mb-7"
const bottomTabTextStyle = "font-size-4 text-black-2 mb-7"

export const PostTab = ({post}) => {

  var name = post.company.name;
  var position = post.position;
  var description = post.post_description;

  return (
    <div key={Math.random()} className={tabAnimationStyle}>
      <div className={tabContentStyle}>
        <div className={upperTabContentStyle}>
          <div className="row">
            <div className="col-12">
              <div>
                <h3 style={{display: "inline-block"}} className={upperTabTitleStyle}>
                  {position}
                </h3>
                <Link to="/posts/:id/tasks/" className={tabButtonStyle}>Solve</Link>
              </div>
              <span className={upperTabSubTitleStyle}>
                {name}
              </span>
            </div>
          </div>
        </div>
        <div className={bottomTabContentStyle} style={{maxHeight:"69vh"}}>
          <div className="row">
            <p className={bottomTabTitleStyle}>Description</p>
            <p className={bottomTabTextStyle}>
              {description}
            </p>
            <Link to="/posts/:id/tasks/" className={tabButtonStyle}>Solve</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
