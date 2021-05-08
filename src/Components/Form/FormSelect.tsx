import React, {useState, useEffect} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select'



const FormSelect = ({query, name}) => {

  const [options, setOptions] = useState([])

  const { errors, control } = useFormContext();

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
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => (
        <>
          <Select
            placeholder={name}
            styles={style}
            options={options}
            onChange={onChange}
            value={value}
          />
          {errors[name] && <p className="pt-2">{errors[name].message}</p>}
        </>
      )}
    />
  );
};

export default FormSelect;
