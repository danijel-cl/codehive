import React from 'react';

const Category = ({classNames, icon, text, subText}) => {
  return (
    <div>
      {/* Single Category */}
      <a href="#" className={classNames.category}>
        <div className={classNames.icon}>
          <i className={icon}/>
        </div>
        {/* Category Content */}
        <div>
          <h5 className={classNames.text}>{text}</h5>
          <p className={classNames.subtext}>{subText}</p>
        </div>
      </a>
      {/* End Single Category */}
    </div>
  );
};

export default Category;
