import React, { useState } from "react";

import "./App.scss";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";

const App = (): JSX.Element => {
  const [textAreaValue, setTextAreaValue] = useState("");

  const changeTextAreaHandler = (
    ev: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(ev.target.value);
  };

  return (
    <div className="App d-flex vh-100">
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
