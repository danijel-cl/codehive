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
      width: "110%",
      left:"-10%",
    }),
  };
  return (
    <Select
      placeholder="City, state, zip code or (Remote)"
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
