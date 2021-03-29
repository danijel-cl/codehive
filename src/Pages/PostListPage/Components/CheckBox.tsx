import React, {useState} from 'react';

const CheckBox = (props) => {
  const [choice, setChoice] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setChoice(!choice)
    console.log('The link for '+ props.index +' was clicked.' + choice);
  };
  return (
    <li className="mb-2" key={props.index}><a onClick={(e) => handleClick(e)} className={`toggle-item ${choice ? 'clicked':''}`}>{props.name}</a></li>
  );
};

export default CheckBox;
