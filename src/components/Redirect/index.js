import React, { useEffect } from "react";
import "./Redirect.scss";

function Redirect(props) {

  useEffect( () => {
    if (props.link) {
        window.location = props.link;
    }
  }, [props]);

  return (
    <div className="redirect">
      <p>Redirecting to {props.link}</p>
    </div>
  );
}

export default Redirect;
