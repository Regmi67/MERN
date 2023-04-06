import React from "react";
import{useState} from 'react';

function UserCard(props) {
  
  return (
    <fieldset>
      <legend></legend>
      <h1>
        {props.firstName}, {props.lastName}
      </h1>
      <p>Age:{props.age}</p>
      <p>Hair Color:{props.hairColor}</p>
    </fieldset>
  );
}

export default UserCard;
