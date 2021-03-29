import React from 'react';

const Category = ({icon, text, subText, color}) => {
  return (
    <div>
      {/* Single Category */}
      <a className="bg-white border border-color-2 rounded-4 pl-5 pt-10 pb-3 px-2 hover-shadow-2 mb-9 d-block w-100 text-center">
        <div className={"text-white square-70 rounded-4 mb-7 font-size-7 text-center mx-auto "+color}>
          <i className={icon}/>
        </div>
        {/* Category Content */}
        <div>
          <h5 className="font-size-5 font-weight-semibold text-black-2 line-height-1">{text}</h5>
          <p className="font-size-4 font-weight-normal text-gray">{subText}</p>
        </div>
      </a>
      {/* End Single Category */}
    </div>
  );
};

export default Category;
