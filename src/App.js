import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import './App.css';
import BlockTypeMantine from './EditorElements/BlockType.mantine';
import CustomPickerMantine from './EditorElements/CustomPicker.mantine';
import FontFamilyMantine from './EditorElements/FontFamily.mantine';
import FontSizeMantine from './EditorElements/FontSize.mantine';

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="m_editor_wrapper"
        editorClassName="m_editor"
        toolbarClassName="m_editor_toolbar"
        toolbar={{
          inline: {
            inDropdown: false,
          },
          blockType: {
            component: BlockTypeMantine,
          },
          fontSize: {
            component: FontSizeMantine,
          },
          fontFamily: {
            component: FontFamilyMantine,
          },
          colorPicker: {
            component: CustomPickerMantine,
          },
        }}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        className="m_output"
      />
    </div>
  );
}

export default App;
