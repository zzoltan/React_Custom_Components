import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      {/* then we can call as it was a custom html tag */}
      <Heading></Heading>
      <List />
    </div>
  );
}

export default App;
