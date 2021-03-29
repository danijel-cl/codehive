import React from 'react';
import Select from 'react-select'

const StyledSelect = () => {
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
  return (
    <Select
      placeholder="Select.."
      styles={style}
      className='h-100 arrow-3'
      options={[
        { value: 'United States of America', label: 'United States of America'},
        { value: 'United Arab Emirates', label: 'United Arab Emirates' }
      ]}
    />
  );
};

export default StyledSelect;
