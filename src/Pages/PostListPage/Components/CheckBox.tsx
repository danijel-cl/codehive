import React, {useState} from 'react';

const CheckBox = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.setChecked({ ...props.checked, [props.index] : !props.checked[props.index] })
  };
  return (
    <li style={{ display: "inline-block" }} className="mb-2 pr-5" key={props.index}><a onClick={(e) => handleClick(e)} className={`toggle-item ${props.checked[props.index] ? 'clicked':''}`}>{props.name}</a></li>
  );
};

export default CheckBox;
