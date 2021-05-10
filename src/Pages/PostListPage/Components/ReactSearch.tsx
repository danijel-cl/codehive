import React, { useState } from 'react';

const searchContentStyle = "form-group position-relative w-lg-45 w-xl-40 w-xxl-45"
const searchTextSyle = " form-control focus-reset pl-13"
const searchIconContentStyle = "h-100 w-px-50 pos-abs-tl d-flex align-items-center \
                                justify-content-center font-size-6"
const searchIconStyle = "icon icon-zoom-2 text-primary font-weight-bold"

const ReactSearch = ({searchText, setSearchText}) => {
  return (
    <div className={searchContentStyle}>
      <input
        value = {searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        className={searchTextSyle}
        type="text"
        placeholder="Position"
      />
      <span className={searchIconContentStyle}>
        <i className={searchIconStyle} />
      </span>
    </div>
  );
};

export default ReactSearch;
