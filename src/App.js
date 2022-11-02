import { Editor } from 'react-draft-wysiwyg';
import './App.css';

function App() {
  return (
    <>
      <Editor
        wrapperClassName="m_editor_wrapper"
        editorClassName="m_editor"
        toolbarClassName="m_editor_toolbar"
      />
    </>
  );
}

export default App;
