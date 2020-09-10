import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="global-header">
      <h3>Hispanic Association of Computer Scientists</h3>
      <div className="socials">
        <a href="https://www.facebook.com/groups/TexasHACS" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com/texasHACS" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter" />
        </a>
        <a href="https://www.instagram.com/texashacs/?hl=en" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram" />
        </a>
        <a href="mailto:texashacs@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="far fa-envelope" />
        </a>
        <a href="https://github.com/chrisnunes57/hacs-opensource" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github" />
        </a>
      </div>
    </div>
  );
}

export default Header;
