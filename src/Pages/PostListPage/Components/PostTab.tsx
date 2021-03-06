import React from 'react';
import {Link} from "react-router-dom";
import { textToHtml } from '../../../Components/Form/FormEditor';

const tabAnimationStyle = "tab-pane active animate__animated animate__slower animate__fadeIn"
const tabContentStyle = " bg-white-opacity-4 rounded-4 border border-mercury shadow-9 pos-abs-xl \
                         ml-xl-8 mt-9 mt-xl-0"
const upperTabContentStyle = "pt-9 pl-15 pr-15 pb-8 border-bottom border-width-1 \
                              border-default-color light-mode-texts"
const upperTabTitleStyle = "pl-0 col-8 font-size-6 mb-0"
const upperTabSubTitleStyle = "font-size-4 text-gray line-height-2"
const tabButtonStyle = "btn btn-blue col-4 text-uppercase rounded-3"
const bottomTabContentStyle = "pt-8 pl-18 pr-18 pb-10 light-mode-texts overflow-y-scroll"
const bottomTabTitleStyle = "font-size-5 font-weight-semibold text-black-2 mb-7 col-12 pl-0"
const bottomTabTextStyle = "font-size-4 text-black-2 mb-7"


export const PostTab = ({post}) => {

  var name = post.company.name;
  var position = post.position;
  var content = textToHtml(post.description)
  const tags_companies = ["Amazon","Google","Facebook", "Tesla", "CodeHive", "Porsche"]
  return (
    <div className = "unmoveable">
    <div key={Math.random()} className={tabAnimationStyle}>
      <div className= {tabContentStyle} >
        <div className={upperTabContentStyle}>
          <div className="row">
            <div className="col-12">
              <div>
                <h3 style={{display: "inline-block"}} className={upperTabTitleStyle}>
                  {position}
                </h3>
              </div>
              <span className={upperTabSubTitleStyle}>
                {name}
              </span>
            </div>
          </div>
        </div>
        <div className={bottomTabContentStyle} style={{maxHeight:"45vh"}}>
          <div className="row">
            <p className={bottomTabTitleStyle}>Description</p>
            <div className={bottomTabTextStyle} dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>
        </div>
      </div>
      </div>
  );
};

export default PostTab;
