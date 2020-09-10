import React from "react";
import "./Header.scss";
import Socials from "../partials/Socials";

function Header() {
  return (
    <div className="global-header">
      <h3>Hispanic Association of Computer Scientists</h3>
      <Socials />
    </div>
  );
}

export default Header;
