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

  const editSection = (
    <div className="admin-edit">
      <form onSubmit={handleSave}>
        <input
          id="meeting-link-edit"
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
  );

  const saveSection = (
    <div onClick={() => setEditing(editing ^ true)} aria-describedby="urlHelp">
      <span>{data.link}</span>
    </div>
  );

  return (
    <div className="form-group">
      <h2 className="form-group-title">Meeting Redirect Link</h2>
      <div className="editable-group">
        {saveSection}
        {!!editing && editSection}
        <small id="urlHelp" className="form-text text-muted">
          This is the link that people will be redirected to when they try to go
          to <a href="https://www.texashacs.org/meet">texashacs.org/meet</a>
        </small>
      </div>
    </div>
  );
}

export default MeetingLinkEdit;
