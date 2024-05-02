import React from "react";
import { PreviewPane } from "components/PreviewPane";
import { MarkdownEditor } from "components/MarkdownEditor";
import { useEditor } from "hooks/useEditor";

const App: React.FC = () => {
  const { htmlText, markdownText, handleInputChange } = useEditor();

  return (
    <div className="App">
      <div className="editor">
        <MarkdownEditor
          markdownText={markdownText}
          handleChange={handleInputChange}
        />
      </div>
      <div className="preview">
        <PreviewPane content={htmlText} />
      </div>
    </div>
  );
};

export default App;
