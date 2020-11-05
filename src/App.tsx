import React from "react";
import "./App.scss";
import Editor from "./Editor/Editor";
import Previewer from "./Previewer/Previewer";

export default function App() {
  return (
    <div className="App d-flex vh-100">
      <Editor />
      <Previewer />
    </div>
  );
}
