/** Local Markdown **/
import React, { useState } from "react";

/** Fetched Markdown **/
// import React, { useEffect, useState } from "react";

import "./App.scss";
import Editor from "./components/editor/editor.component";
import Previewer from "./components/previewer/previewer.component";

/** Local Markdown **/
import raw from "raw.macro";

function App() {
  /** Local Markdown **/
  const inicialMarkdown = raw("./demo.md");
  const [textAreaValue, setTextAreaValue] = useState(inicialMarkdown);

  /** Fetched Markdown **/
  // const [textAreaValue, setTextAreaValue] = useState("");
  // useEffect(() => {
  //   fetch("https://raw.githubusercontent.com/Beamanator/fdi/master/README.md")
  //     .then((response) => {
  //       if (response.ok) return response.text();
  //       else return Promise.reject("Didn't fetch text correctly");
  //     })
  //     .then((text) => {
  //       setTextAreaValue(text);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  const changeTextAreaHandler = (
    ev: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(ev.target.value);
  };

  return (
    <div className="app">
      <Editor textArea={textAreaValue} changeTextArea={changeTextAreaHandler} />
      <Previewer textArea={textAreaValue} />
    </div>
  );
}

export default App;
