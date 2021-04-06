import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { EditorState, RichUtils } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichEditor = (props) => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  let options = ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'remove', 'history'];

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorStyle={{lineHeight:"1px"}}
        toolbar={{
          options: options,
        }}
      />
    </div>
  );
}

export default RichEditor;
