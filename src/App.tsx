import React, { useEffect, useState } from "react";

import "./App.scss";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";

/** Local Markdown **/
// import raw from "raw.macro";

const App = (): JSX.Element => {
  /** Local Markdown **/
  // const inicialMarkdown = raw("./demo.md");
  // const [textAreaValue, setTextAreaValue] = useState(inicialMarkdown);

  /** Fetched Markdown **/
  const [textAreaValue, setTextAreaValue] = useState("");
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Beamanator/fdi/master/README.md")
      .then((response) => {
        if (response.ok) return response.text();
        else return Promise.reject("Didn't fetch text correctly");
      })
      .then((text) => {
        setTextAreaValue(text);
      })
      .catch((error) => console.error(error));
  }, []);

  const changeTextAreaHandler = (
    ev: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(ev.target.value);
  };

  return (
    <div className="App d-flex vh-100 ">
      <Editor textArea={textAreaValue} changeTextArea={changeTextAreaHandler} />
      {/* <textarea
        value={textAreaValue}
        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
          setTextAreaValue(ev.target.value)
        }
      /> */}
      <Previewer textArea={textAreaValue} />
    </div>
  );
};

export default App;
