import React, { ReactElement } from "react";

import "./editor.styles.scss";

type EditorProps = {
  textArea: string;
  changeTextArea: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Editor({ textArea, changeTextArea }: EditorProps): ReactElement {
  return (
    <textarea className="editor" value={textArea} onChange={changeTextArea} />
  );
}

export default Editor;
