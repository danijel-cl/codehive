import React, { useState } from 'react';
import CheckBox from './CheckBox'

const CheckBoxList = (props) => {

  return (
    <div className="widgets mb-11">
      <h4 className="font-size-6 font-weight-semibold mb-6">{props.name}</h4>
      <ul className="list-unstyled filter-check-list">
        {props.items.map((item, index) => (
          <CheckBox index={index} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default CheckBoxList;
