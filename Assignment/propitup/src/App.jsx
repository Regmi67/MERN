import React, { Component } from "react";
import PersonCard from "./components/PersonCard";
import UserCard from "./components/UserCard";


export class App extends Component {
  render() {
    return (
      <fieldset>
        <legend>Page1</legend>
        <UserCard
          firstName="Doe"
          lastName="Jane"
          age={45}
          hairColor="Black"
        />
        <UserCard
          firstName="Smith"
          lastName="John"
          age={88}
          hairColor="Brown"
        />
        <PersonCard
          firstName="Fillmore"
          lastName="Millard"
          age={50}
          hairColor="Brown"
        />
        <UserCard
          firstName="Smith"
          lastName="Maria"
          age={62}
          hairColor="Brown"
        />
      </fieldset>
    );
  }
}

export default App;
