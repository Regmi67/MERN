import React, { Component } from "react";

export class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    };
  }

  addingBirthday() {
    this.setState({
      age: this.state.age + 1,
    });
  }
  render() {
    return (
      <fieldset>
        <legend></legend>
        <h1>
          {this.props.firstName}, {this.props.lastName}
        </h1>
        <p>Age:{this.state.age}</p>
        <p>Hair Color:{this.props.hairColor}</p>
        <button onClick={() => this.addingBirthday()}>
          Birthday button for {this.props.firstName} {this.props.lastName}
        </button>
      </fieldset>
    );
  }
}

export default PersonCard;
