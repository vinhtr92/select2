import React from "react";
import ReactDOM from "react-dom";
// import Selec2 from "../components/select2";
import Select from "../components/select";

import "./styles.css";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Select />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <input type="text" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<IndexPage />, rootElement);
