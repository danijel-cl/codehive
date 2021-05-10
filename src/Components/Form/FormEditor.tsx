import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const textToEditorState = (text) =>{
  const contentState = convertFromRaw(JSON.parse(text))
  return EditorState.createWithContent(contentState)
}

export const editorStateToText = (state) =>{
  return JSON.stringify(convertToRaw(state.getCurrentContent()))
}


export const FormEditor = ({name}) => {

  const { errors, control } = useFormContext();

  let options = ['inline', 'blockType', 'fontSize', 'fontFamily', 'list',
                  'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'history'];

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange, value }) => (
        <>
          <Editor
            editorState={value}
            onEditorStateChange={onChange}
            editorStyle={{lineHeight:"1px"}}
            toolbar={{
              options: options,
            }}
          />
          {errors[name] && <p className="pt-2">{errors[name].message}</p>}
        </>
      )}
    />
  );
}

export default FormEditor;
