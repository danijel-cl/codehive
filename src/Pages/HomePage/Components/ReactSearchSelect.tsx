import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import ReactSelect from "./ReactSelect";
import ReactSearch from "./ReactSearch";
import LinkButton from "./LinkButton";

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
    <form action="/" className="search-form" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
      <div className="filter-search-form-2 bg-white rounded-sm shadow-7 pr-8 py-7 pl-6">
        <div className="filter-inputs">
          <ReactSearch searchText={searchText} setSearchText={setSearchText}/>
          <div className="pl-13 form-group position-relative">
            <ReactSelect setSelectText={setSelectText}/>
            <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"><i className="icon icon-pin-3 text-primary font-weight-bold" /></span>
          </div>
        </div>
        <div className="button-block">
          <LinkButton to={"/posts"+getText()}>Search</LinkButton>
        </div>
      </div>
    </form>
  );
};

export default ReactSearchSelect;
