import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox'

const CheckBoxList = (props) => {
  const [checked, setChecked] = useState(-1);
  return (
    <div className="widgets mb-11">
      <h4 className="font-size-6 font-weight-semibold mb-6">{props.name}</h4>
      <ul className="list-unstyled filter-check-list" style={{ display: "inline-flex"}}>
        {props.items.map((item, index) => (
          <CheckBox key={index} index={index} name={item.name} checked={checked} setChecked={setChecked} reset/>
        ))}
      </ul>
    </div>
  );
};

export default CheckBoxList;
