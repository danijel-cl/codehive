import { Form } from 'antd';
import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CheckBox from './CheckBox'

const CheckBoxList = (props) => {
  const {name, title, items} = props
  const [checked, setChecked] = useState(-1);
  const { errors, control } = useFormContext();

  return (
    <div className="widgets mb-11">
      <h4 className="font-size-6 font-weight-semibold mb-6">{title}</h4>
      <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => {
          return (
                  <ul className="list-unstyled filter-check-list" style={{ display: "inline-flex"}}>
            {items.map((item, index) => (
              <CheckBox key={index} index={index} name={item.name} checked={checked} setChecked={setChecked} reset/>
            ))}
      </ul>
          )
        }}
      />
    </Form.Item>
    </div>
  );
};

export default CheckBoxList;
