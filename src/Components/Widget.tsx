import React from 'react';

const Widget = (props) => {
  return (
    <div className="widgets mb-11">
      <h4 className="font-size-6 font-weight-semibold mb-6">{props.name}</h4>
      <ul className="list-unstyled filter-check-list">
        {props.items.map((item, index) => (
          <li className="mb-2" key={index}><a href="#" className="toggle-item">{item.name}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Widget;
