import React, {useState} from 'react';

const CheckBox = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (props.index===props.checked) {
      props.setChecked(-1)
    } else {
      props.setChecked(props.index)
    }
  };
  return (
    <li className="mr-5" key={props.index}><a onClick={(e) => handleClick(e)} className={`toggle-item ${props.checked===props.index ? 'clicked':''}`}>{props.name}</a></li>
  );
};

export default CheckBox;
