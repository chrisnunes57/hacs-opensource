import React from "react";
import { Container } from "reactstrap";

export default class SignUp extends React.Component {
  render() {
    return (
    <form>
    <label>
        E-mail:
    <input type="text" email="E-mail"/>
    </label>
    <input type="submit" value="Submit"/>
    </form>
    ) 
  }
}