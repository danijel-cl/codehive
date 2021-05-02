import React, {useState} from 'react';
import { useFormContext } from 'react-hook-form';

const CheckBox = (props) => {
  const { setValue } = useFormContext();
  
  const handleClick = (e) => {
    e.preventDefault();
    if (props.index===props.checked) {
      props.setChecked(-1)
      setValue('experience', '')
    } else {
      props.setChecked(props.index)
      setValue('experience', props.name)
    }
  };
  return (
    <li className="mr-5" key={props.index}><a onClick={(e) => handleClick(e)} className={`toggle-item ${props.checked===props.index ? 'clicked':''}`}>{props.name}</a></li>
  );
};

export default CheckBox;
