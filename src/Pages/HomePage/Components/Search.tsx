import React, { useState } from 'react';

const Search = (props) => {
  const [inputText, setInputText] = useState("")
  return (
    <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45">
      <input value = {inputText} onChange={(e)=>setInputText(e.target.value)} className="form-control focus-reset pl-13" type="text" placeholder="Position" />
      <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
        <i className="icon icon-zoom-2 text-primary font-weight-bold" />
      </span>
    </div>
  );
};

export default Search;
