import React, {useRef} from "react";
import "./AdminPage.scss";
import UserEdit from "./UserEdit.js";

const updateInDB = (data) => {
    fetch("https://enigmatic-shore-29691.herokuapp.com/siteContent", {
        method: "POST", // or 'PUT'
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        }).catch((error) => {
            console.error("Error:", error);
        });
    };

function AdminPanel(props) {

    const meetingLinkInput = useRef(null);
    const refs = [meetingLinkInput];

    const updateInfo =  () => {
        let data = {};

        refs.forEach(ref => {
            let name = ref.current.id;
            let value = ref.current.value;

            if(name === "meetingLink") {
                value = {"link": value}
            }

            data[name] = value;
        })

        updateInDB(data);

    };

    return (
      <div className="admin-panel">
        <div className="form-group">
          <label htmlFor="meetingLink"><h2>/meet Redirect Link</h2></label>
          <input
            type="url"
            className="form-control"
            id="meetingLink"
            aria-describedby="urlHelp"
            placeholder="Enter URL"
            defaultValue={props.meetingLink.link}
            ref={meetingLinkInput}
          />
          <small id="urlHelp" className="form-text text-muted">
            This is the link that people will be redirected to when they try to
            go to <code>texashacs.org/meet</code>
          </small>
        </div>
        <div className="form-group">
          <h2>Officers</h2>
          <div className="officer-group">
            {props.officers && props.officers.members.map((member, i) => {
              return <UserEdit member={member} key={i}/>
            })}
          </div>
        </div>
        <button className="btn btn-primary" onClick={updateInfo}>
          Update
        </button>
      </div>
    );
}

export default AdminPanel;
