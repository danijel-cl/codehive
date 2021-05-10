import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';

export const textToEditorState = (text) =>{
  const contentState = convertFromRaw(JSON.parse(text))
  return EditorState.createWithContent(contentState)
}
