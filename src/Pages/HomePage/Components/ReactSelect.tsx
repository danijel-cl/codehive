import React from 'react';
import Select from 'react-select'

const ReactSelect = () => {
  const style = {
    control: base => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "100%",
    }),
  };
  const options = [
    { value: 'United States of America', label: 'United States of America'},
    { value: 'United Arab Emirates', label: 'United Arab Emirates' }
  ]
  return (
    <Select
      placeholder="Select.."
      styles={style}
      className='h-100 arrow-3'
      options={options}
    />
  );
};

export default ReactSelect;
