import React, { useEffect } from "react";
import "./Redirect.scss";

function Redirect(props) {

  useEffect( () => {
    if (props.meetingLink) {
        window.location = props.meetingLink.link;
    }
  }, [props]);

  return (
    <div className="redirect">
      <p>Redirecting to {props.meetingLink.link}</p>
    </div>
  );
}

export default Redirect;
