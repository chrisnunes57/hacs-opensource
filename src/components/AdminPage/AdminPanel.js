import React, { useRef, useState } from "react";
import "./AdminPage.scss";
import OfficerEdit from "./OfficerEdit";
import OfficersEdit from "./OfficersEdit";

const updateInDB = (data) => {
  fetch("https://enigmatic-shore-29691.herokuapp.com/siteContent", {
    method: "POST", // or 'PUT'
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error("Error:", error);
  });
};

function AdminPanel(props) {
  const meetingLinkInput = useRef(null);
  const refs = [meetingLinkInput];

  const [officers, setOfficers] = useState(null);

  const updateInfo = () => {
    let data = {};

    refs.forEach((ref) => {
      let name = ref.current.id;
      let value = ref.current.value;

      if (name === "meetingLink") {
        value = { link: value };
      }

      data[name] = value;
    });

    updateInDB(data);
  };

  const updateOfficer = (officerData) => {
    let updating = { ...officers };
    updating[officerData.uid] = officerData;
    setOfficers(updating);
  };

  const placeholderOfficer = {
    email: "",
    imageURL:
      "https://drive.google.com/uc?export=view&id=1WsNS0zkdosk15RGIM8ZN7vDlO9-m4jUO",
    linkedin: "https://www.linkedin.com/in/jeffreymoulckers",
    name: "Chris Nunes",
    index: 1,
    role: "Web Development",
    uid: "In5lUlNNRvmaWvzYZnJ3r",
  };

  return (
    <div className="admin-panel">
      <div className="form-group">
        <label htmlFor="meetingLink">
          <h2>/meet Redirect Link</h2>
        </label>
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
          This is the link that people will be redirected to when they try to go
          to <code>texashacs.org/meet</code>
        </small>
      </div>
      <div className="form-group">
        <h2>Officers (WiP)</h2>
        <div className="officer-group">
          {/* TODO: Add ability to drag and drop ordering to enforce indices. */}
          {/* {Object.keys(props.officers.members).map((key) => { */}
          {/* return  */}
          <OfficerEdit
            // id={key}
            data={placeholderOfficer}
            handleUpdate={updateOfficer}
          />
          {/* ; */}
          {/* })} */}
          {/* <OfficersEdit members={props.officers.members} /> */}
        </div>
      </div>
      <button className="btn btn-primary" onClick={updateInfo}>
        Update
      </button>
    </div>
  );
}

export default AdminPanel;
