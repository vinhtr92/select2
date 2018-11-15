import React from "react";
import ReactDOM from "react-dom";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ""
    };
  }

  render() {
    return (
      <div className="select2">
        <span className="select2__main">select:</span>
        <span className="select2__container">
          <input type="text" />
          <span>one</span>
          <span>two</span>
          <span>three</span>
          <span>four</span>
        </span>
      </div>
    );
  }
}
export default Select;
