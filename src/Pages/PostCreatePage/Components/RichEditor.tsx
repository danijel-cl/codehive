import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { EditorState, RichUtils } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Form } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

const RichEditor = (props) => {
  const {name} = props
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const { errors, control } = useFormContext();
  console.log(editorState)


  let options = ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'history'];

  return (
      <Form.Item
      validateStatus={errors[`${name}`] ? 'error' : 'success'}
      help={errors[`${name}`] ? errors[`${name}`]?.message : ''}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, value }) => {
          return (
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
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
