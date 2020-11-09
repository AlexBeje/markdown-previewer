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
    <div className="previewer" dangerouslySetInnerHTML={{ __html: clean }} />
  );
}

export default Preview;
