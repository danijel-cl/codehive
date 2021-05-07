import React, {useState, useCallback} from 'react';
import { useFormContext } from 'react-hook-form';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichEditor = (props) => {
  const name = props.name
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const { setValue, reset } = useFormContext();

  const onStateChange = (value) => {
    const blocks = convertToRaw(value.getCurrentContent()).blocks;
    const text = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    setEditorState(value)
    setValue(name, text)
  }


  let options = ['inline', 'blockType', 'fontSize', 'fontFamily', 'list',
                  'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'history'];

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={(value) => onStateChange(value)}
      editorStyle={{lineHeight:"1px"}}
      toolbar={{
        options: options,
      }}
    />
  );
}

export default RichEditor;
