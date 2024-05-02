import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { EditorView } from "@codemirror/view";
import { FaX } from "react-icons/fa6";

type MarkdownEditorProps = {
  markdownText: string;
  handleChange: (value: string) => void;
};

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdownText,
  handleChange,
}) => {
  const handleClear = useCallback(() => handleChange(""), [handleChange]);

  return (
    <>
      <div className="pane-header">
        <span>Markdown Editor</span>
        <FaX onClick={handleClear} />
      </div>
      <CodeMirror
        value={markdownText}
        onChange={handleChange}
        theme={vscodeDark}
        height="400px"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
          EditorView.lineWrapping,
        ]}
      />
    </>
  );
};
