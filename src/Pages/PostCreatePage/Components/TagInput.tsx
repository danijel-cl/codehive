import { Form } from 'antd';
import React, {useState, useCallback} from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const TagInput = (props) => {
  const {skills, setSkills, name} = props
  const [text, setText] = useState('');
  // const { errors, control } = useFormContext();

  const addText = (e) =>{
    if(text!=="" && !skills.includes(text)){
      setSkills([...skills, text], console.log(skills));
    }
    
    setText("");
  };

  return (
    <div>
      {/* <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => {
          return (
            <div className="input-group mb-3 pb-5">
              <input value = {text} onChange={(e)=>setText(e.target.value)} className="form-control col-11" placeholder="English.." style={{height:"4vh"}}/>
              <button onClick = {addText} className="col-2" style={{backgroundColor:"#00b074", color:"white", border:"none" }} type="button">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          )
        }}
      />
      </Form.Item>
      <div>
        <ul>
          {skills?.map((skill, index) => (
            <li key={index} className="font-size-5">
              {skill}
              <i onClick={(e)=>setSkills(skills.filter(item=>item!==skill))} className="pl-10 fa fa-times"></i>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default TagInput;
