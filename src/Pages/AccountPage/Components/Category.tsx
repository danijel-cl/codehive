import React from 'react';

const Category = ({icon, text, subText, color}) => {
  return (
    <div>
      {/* Single Category */}
      <a className="media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8">
        <div className={"text-white circle-56 font-size-6 mr-7"+" "+color}>
          <i className={icon}/>
        </div>
        {/* Category Content */}
        <div>
          <h5 className="font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1">{text}</h5>
          <p className="font-size-4 font-weight-normal text-gray mb-0">{subText}</p>
        </div>
      </a>
      {/* End Single Category */}
    </div>
  );
};

export default Category;
