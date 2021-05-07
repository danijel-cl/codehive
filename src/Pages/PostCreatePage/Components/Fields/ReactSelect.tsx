import React, {useState, useEffect} from 'react';
import Select from 'react-select'



const ReactSelect = ({query, placeholder}) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([])

  console.log(value)

  const style = {
    control: base => ({
      ...base,
      height:"4.5vh"
    }),
    menu: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "black"
    }),
  };

  useEffect(() => {
    query()
      .then(
        (data) => {
          setOptions(data.map(({name})=>({"value":name,"label":name})));
        }
      )
  }, [])

  return (
    <Select
      placeholder={placeholder}
      styles={style}
      className= 'h-100 arrow-3'
      options={options}
      onChange={setValue}
      value={value}
    />
  );
};

export default ReactSelect;
