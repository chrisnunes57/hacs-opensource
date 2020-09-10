import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="global-header">
      <h3>Hispanic Association of Computer Scientists</h3>
      <div className="socials">
        <i class="fab fa-facebook-f" />
        <i class="fab fa-twitter" />
        <i class="fab fa-instagram" />
        <i class="far fa-envelope" />
        <i class="fab fa-github" />
      </div>
    </div>
  );
}

export default Header;
