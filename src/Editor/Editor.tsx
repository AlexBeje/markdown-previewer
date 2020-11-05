import React, { ReactElement } from "react";

import "./Editor.scss";

interface Props {
  textArea: string;
  changeTextArea: any;
}

export default function Editor({
  textArea,
  changeTextArea,
}: Props): ReactElement {
  return (
    <textarea
      className="Editor w-50 p-5"
      value={textArea}
      onChange={changeTextArea}
    />
  );
}
