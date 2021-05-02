import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Form } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

const RichEditor = (props) => {
  const {name} = props
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const { errors, control, setValue } = useFormContext();

  const onStateChange = (value) => {
    const blocks = convertToRaw(value.getCurrentContent()).blocks;
    const text = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    setValue(name, text)
    setEditorState(value)
  }


  let options = ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'history'];

  return (
      <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        control={control}
        name={name}
        defaultValue=''
        render={({ onChange, value }) => {
          return (
            <Editor
              editorState={editorState}
              onEditorStateChange={(value) => onStateChange(value)}
              editorStyle={{lineHeight:"1px"}}
              toolbar={{
                options: options,
              }}
            />
          )
        }}
      />
    </Form.Item>
  );
}

export default RichEditor;
