import React, { ReactElement } from "react";

import marked from "marked";
import DOMPurify from "dompurify";

import "./previewer.styles.scss";

type PreviewProps = {
  textArea: string;
};

function Preview({ textArea }: PreviewProps): ReactElement {
  const clean = DOMPurify.sanitize(marked(textArea));

  return (
    <div
      className="w-50 p-5 overflow-auto"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}

export default Preview;
