import React, { ReactElement } from "react";

import marked from "marked";
import DOMPurify from "dompurify";

import "./Previewer.scss";

interface Props {
  textArea: string;
}

export default function Editor({ textArea }: Props): ReactElement {
  const clean = DOMPurify.sanitize(marked(textArea));

  return (
    <div
      className="Previewer w-50 p-5 overflow-auto"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
