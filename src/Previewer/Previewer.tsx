import React, { ReactElement } from "react";

interface Props {
  textArea: string;
}

export default function Previewer({ textArea }: Props): ReactElement {
  return <p className="w-50 p-5">{textArea}</p>;
}
