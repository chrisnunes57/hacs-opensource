import React, { useState } from "react";
import { nanoid } from "nanoid";
import Editable from "../editables/Editable";
import "./AdminPage.scss";

function MemberOfTheWeekEdit(props) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState(props.data);

  const handleSave = (e) => {
    props.handleUpdate(data);
    setEditing(false);
    e.preventDefault();
  };

  const handleChange = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const editSection = (
    <div className="admin-edit">
      <form onSubmit={handleSave}>
        <label>Name</label>
        <input
          id="motw-name-edit"
          className="form-control-small"
          name="name"
          defaultValue={data.name}
          placeholder={"First & last name"}
          required
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          id="motw-role-edit"
          className="form-control-small"
          name="role"
          defaultValue={data.description}
          placeholder="ex.: President"
          required
          onChange={handleChange}
        />
        <label>LinkedIn URL</label>
        <input
          id="motw-linkedin-edit"
          className="form-control-small"
          name="linkedin"
          type="url"
          defaultValue={data.linkedin}
          placeholder="ex.: linkedin.com/in/firstnamelastname"
          onChange={handleChange}
        />
        <label>Image URL</label>
        <input
          id="motw-image-url-edit"
          className="form-control-small"
          name="imageURL"
          type="url"
          defaultValue={data.imageURL}
          placeholder={`${data.name} image URL`}
          required
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );

  const saveSection = (
    <div onClick={() => setEditing(editing ^ true)}>
      <p><span>{data.name}</span></p>
      {/* TODO: Add X mark to close dropdown */}
    </div>
  );

  return (
    <div className="form-group">
      <h2 className="form-group-title">Member of the Week</h2>
      <div className="editable-group">
        {saveSection}
        {!!editing && editSection}
      </div>
    </div>
  );
}

export default MemberOfTheWeekEdit;
