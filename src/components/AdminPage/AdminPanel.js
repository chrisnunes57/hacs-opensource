import firebase, { auth } from "../../_firebase";
import React, { useEffect, useRef, useState } from "react";
import "./AdminPage.scss";
import OfficerEdit from "./OfficerEdit";
import MeetingLinkEdit from "./MeetingLinkEdit";
import config from "../../_config";

function AdminPanel(props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (auth.currentUser == null) {
      return;
    }
    
    auth.currentUser
      .getIdToken(true)
      .then((idToken) => {
        fetch(config.url + "/siteContent", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
          body: JSON.stringify(data),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  const updateOfficer = (officerData) => {
    let updating = { ...data };
    updating.officers[officerData.uid] = officerData;
    setData(updating);
  };

  const updateMeetingLink = (linkData) => {
    let updating = { ...data };
    updating.meetingLink = linkData;
    setData(updating);
  };

  const submitSignout = (e) => {
    props.signoutUser();
  };

  return (
    <div className="admin-panel">
      <MeetingLinkEdit
        data={data.meetingLink}
        handleUpdate={updateMeetingLink}
      />
      {/* TODO: Add ability to drag and drop ordering to enforce indices. */}
      {Object.keys(data.officers).map((uid) => (
        <OfficerEdit
          id={uid}
          key={uid}
          data={data.officers[uid]}
          handleUpdate={updateOfficer}
        />
      ))}
      <button
        className="btn btn-primary" /* onClick={ TODO: Implement db update } */
      >
        Update
      </button>
      <button className="btn btn-primary" onClick={submitSignout}>
        Sign Out
      </button>
    </div>
  );
}

export default AdminPanel;
