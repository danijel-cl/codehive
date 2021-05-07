import React, {useState, useCallback} from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichEditor = ({name}) => {

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
            onEditorStateChange={(value) => onChange(value)}
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

export default RichEditor;
