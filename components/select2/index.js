import React from "react";
import ReactDOM from "react-dom";

class Select2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      value: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: [...this.state.value, this.state.input],
      input: ""
    });
  }

  handleRemove(event) {}

  render() {
    console.log(this.state.value, this.state.input);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input} />
          <button type="submit">Submit!</button>
        </form>
      </div>
    );
  }
}

export default Select2;
