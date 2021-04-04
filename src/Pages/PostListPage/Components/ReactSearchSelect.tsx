import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import ReactSelect from "./ReactSelect";
import ReactSearch from "./ReactSearch";

const ReactSearchSelect = (props) => {
  const [searchText, setSearchText] = useState("");
  const [selectText, setSelectText] = useState("");
  const getText= () =>{
    if (searchText!=="" && selectText!==""){
      return "?search="+searchText+"&select"+selectText;
    } else if (searchText!=="" && selectText==="" ){
      return "?search="+searchText;
    } else if (searchText==="" && selectText!=="" ){
      return "?select="+selectText;
    } else{
      return "";
    }
  };
  return (
    <form action="/" className="search-form search-2-adjustment ml-lg-0 ml-md-15">
      <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
        <div className="filter-inputs">
          <ReactSearch searchText={searchText} setSearchText={setSearchText}/>
          <div className="form-group position-relative w-lg-50 w-xl-5 w-xxl-50">
            <div  className="pl-13">
              <ReactSelect setSelectText={setSelectText}/>
            </div>
            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
              <i className="icon icon-pin-3 text-primary font-weight-bold" />
            </span>
          </div>
        </div>
        <div className="button-block">
          <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">Search</button>
        </div>
      </div>
    </form>
  );
};

export default ReactSearchSelect;
