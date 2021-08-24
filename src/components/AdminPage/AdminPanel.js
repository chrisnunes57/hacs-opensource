import firebase, { auth } from "../../_firebase";
import React, { useEffect, useRef, useState } from "react";
import "./AdminPage.scss";
import OfficerEdit from "./OfficerEdit";
import MeetingLinkEdit from "./MeetingLinkEdit";
import config from "../../_config";
import MemberOfTheWeekEdit from "./MemberOfTheWeekEdit";

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

  const updateMemberOfTheWeek = (linkData) => {
    let updating = { ...data };
    updating.memberOfTheWeek = linkData;
    setData(updating);
  };

  const submitSignout = (e) => {
    props.signoutUser();
  };

  const meetingLinkEdit =
    data.meetingLink !== undefined ? (
      <MeetingLinkEdit
        data={data.meetingLink}
        handleUpdate={updateMeetingLink}
      />
    ) : null;

  const officerOfTheWeekEdit =    <div className="form-group">
      <h2 className="form-group-title">Officers</h2>{
    data.officers !== undefined
      ? [Object.keys(data.officers).map((uid) => (
          <OfficerEdit
            id={uid}
            key={uid}
            data={data.officers[uid]}
            handleUpdate={updateOfficer}
          />
        )), <OfficerEdit handleUpdate={updateOfficer} data={null}/>]
      : null}

      </div>

  const memberOfTheWeekEdit =
    data.memberOfTheWeek !== undefined ? (
      <MemberOfTheWeekEdit
        data={data.memberOfTheWeek}
        handleUpdate={updateMemberOfTheWeek}
      />
    ) : null;

  return (
    <div className="admin-panel">
      {meetingLinkEdit}
      {/* TODO: Add ability to drag and drop ordering to enforce indices. */}
      {officerOfTheWeekEdit}
      {memberOfTheWeekEdit}
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
