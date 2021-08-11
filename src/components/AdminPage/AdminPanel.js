import firebase, { auth } from "firebase";
import React, { useEffect, useRef, useState } from "react";
import "./AdminPage.scss";
import OfficerEdit from "./OfficerEdit";
import MeetingLinkEdit from "./MeetingLinkEdit";

function AdminPanel(props) {
  const [data, setData] = useState(props.data);

  const updateOfficer = (officerData) => {
    let updating = { ...data };
    updating.officers[officerData.uid] = officerData;
    setData(updating);
  };

  const updateMeetingLink = (linkData) => {
    let updating = { ...data };
    updating.meetingLink = linkData;
    console.log(updating);
    setData(updating);
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
    </div>
  );
}

export default AdminPanel;
