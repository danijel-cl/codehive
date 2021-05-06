import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import ReactSelect from "./ReactSelect";
import ReactSearch from "./ReactSearch";

const searchFormStyle = "search-form search-2-adjustment ml-lg-0 ml-md-15"
const searchContentStyle = "filter-search-form-2 bg-white rounded-sm shadow-7 \
                              pr-4 py-2 pl-0"
const selectContentStyle = "form-group position-relative w-lg-50 w-xl-5 w-xxl-50"
const searchIconContentStyle = "h-100 w-px-50 pos-abs-tl d-flex align-items-center \
                                  justify-content-center font-size-6"
const searchIconStyle = "icon icon-pin-3 text-primary font-weight-bold"
const searchFormButtonStyle = "btn btn-primary line-height-reset h-100 btn-submit \
                                w-100 text-uppercase"

const PostFilter = (props) => {
  const [searchText, setSearchText] = useState("");
  const [selectText, setSelectText] = useState("");

  return (
    <form action="/" className={searchFormStyle}>
      <div className={searchContentStyle}>
        <div className="filter-inputs">
          <ReactSearch
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <div className={selectContentStyle}>
            <div  className="pl-13">
              <ReactSelect
                setSelectText={setSelectText}
              />
            </div>
            <span className={searchIconContentStyle}>
              <i className={searchIconStyle}/>
            </span>
          </div>
        </div>
        <div className="button-block">
          <button className={searchFormButtonStyle}>Search</button>
        </div>
      </div>
    </form>
  );
};

export default PostFilter;
