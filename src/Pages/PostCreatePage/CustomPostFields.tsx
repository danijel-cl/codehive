import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { styled } from '../../utils/css';


const addOtherButtonStyle = styled.cssStyle`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  margin-right: 5px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;


const inputContainer = styled.cssStyle`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CustomPostField = () => {
  const { control, errors } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'postFields',
  });

  return (
    <>
        <button
          style={addOtherButtonStyle}
          onClick={() => {
            append({ name: '', quantity: '' });
          }}>
          + Add Other
        </button>

      {fields.map((item, index) => (
        <div style={inputContainer} key={item.id}>
          <input />
          <button onClick={() => remove(index)} />
        </div>
      ))}
    </>
  );
};
