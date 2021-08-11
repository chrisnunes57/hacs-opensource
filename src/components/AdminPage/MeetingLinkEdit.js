import React, { useState } from "react";
import "./AdminPage.scss";
function MeetingLinkEdit(props) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState(props.data);

  const handleSave = (event) => {
    props.handleUpdate(data);
    setEditing(false);
    event.preventDefault();
  };

  const handleChange = (event) => {
    let newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  };

  return (
    <div className="form-group">
      <h2>Meeting Redirect Link</h2>
      <div className="meeting-link-group">
        <div className="officer-admin">
          {!editing ? (
            <div
              onClick={() => setEditing(editing ^ true)}
              aria-describedby="urlHelp"
            >
              <span>{data.link}</span>
            </div>
          ) : (
            <div className="officer-admin-edit">
              <form onSubmit={handleSave}>
                <input
                  id="meetingLink"
                  className="form-control"
                  name="link"
                  type="url"
                  aria-describedby="urlHelp"
                  placeholder="Enter URL"
                  defaultValue={data.link}
                  onChange={handleChange}
                />
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              </form>
            </div>
          )}
          <small id="urlHelp" className="form-text text-muted">
            This is the link that people will be redirected to when they try to
            go to{" "}
            <a href="https://www.texashacs.org/meet">texashacs.org/meet</a>
          </small>
        </div>
      </div>
    </div>
  );
}

export default MeetingLinkEdit;
