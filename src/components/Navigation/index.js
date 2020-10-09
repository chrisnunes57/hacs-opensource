import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

function Test() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Test;