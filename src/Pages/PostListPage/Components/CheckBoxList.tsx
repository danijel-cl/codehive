import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox'

const CheckBoxList = (props) => {
  const initializeState = (items) => {
    var boxes = {};
    items.map((item, index) => (
      boxes[index] = false
    ));
    return boxes
  };
  const [checked, setChecked] = useState(initializeState(props.items));
  return (
    <div className="widgets mb-11">
      <h4 className="font-size-6 font-weight-semibold mb-6">{props.name}</h4>
      <ul className="list-unstyled filter-check-list">
        {props.items.map((item, index) => (
          <CheckBox key={index} index={index} name={item.name} checked={checked} setChecked={setChecked}/>
        ))}
      </ul>
    </div>
  );
};

export default CheckBoxList;
