import { Form } from 'antd';
import React, {useState} from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FormTagInput = ({name}) => {
  const [skills, setSkills] = useState(Array())
  const [text, setText] = useState('');
  const { errors, control } = useFormContext();

  const addText = (e, onChange) =>{
    if(text!=="" && !skills.includes(text)){
      setSkills([...skills, text]);
      onChange(skills)
    }
    setText("");
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => {
          return (
            <div className="input-group mb-3 pb-5">
              <input value = {text} onChange={(e)=>setText(e.target.value)} className="form-control col-11" placeholder="English.." style={{height:"5vh"}}/>
              <button onClick = {(e) => addText(e, onChange)} className="col-2" style={{backgroundColor:"#00b074", color:"white", border:"none" }} type="button">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          )
        }}
      />
      <div>
        <ul>
          {skills?.map((skill, index) => (
            <li key={index} className="font-size-5">
              {skill}
              <i onClick={(e)=>setSkills(skills.filter(item=>item!==skill))} className="pl-10 fa fa-times"></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FormTagInput;
