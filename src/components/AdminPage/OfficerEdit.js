import React, { useState } from "react";
import Editable from "../editables/Editable";
import "./AdminPage.scss";

function OfficerEdit(props) {
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
          id="officer-name-edit"
          className="form-control-small"
          name="name"
          defaultValue={data.name}
          placeholder={"First & last name"}
          required
          onChange={handleChange}
        />
        <label>Officer Role</label>
        <input
          id="officer-role-edit"
          className="form-control-small"
          name="role"
          defaultValue={data.role}
          placeholder="ex.: President"
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          id="officer-email-edit"
          className="form-control-small"
          name="email"
          type="email"
          defaultValue={data.email}
          placeholder="ex.: texashacs@gmail.com"
          onChange={handleChange}
        />
        <label>Ordering Value</label>
        <input
          id="officer-order-edit"
          className="form-control-small"
          name="order"
          type="number"
          defaultValue={data.order}
          min="0"
          required
          onChange={handleChange}
        />
        <label>LinkedIn URL</label>
        <input
          id="officer-linkedin-edit"
          className="form-control-small"
          name="linkedin"
          type="url"
          defaultValue={data.linkedin}
          placeholder="ex.: linkedin.com/in/firstnamelastname"
          onChange={handleChange}
        />
        <label>Image URL</label>
        <input
          id="officer-image-url-edit"
          className="form-control-small"
          name="imageURL"
          type="url"
          defaultValue={data.imageURL}
          placeholder="Officer image URL"
          required
          onChange={handleChange}
        />
        <label>Officer UID</label>
        <input
          id="officer-uid-edit"
          className="form-control-small"
          name="uid"
          type="password"
          defaultValue={data.uid ?? new Date().getUTCMilliseconds()}
          placeholder="Officer UID"
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
      <p>
        <span>
          {data.name} - <span className="subtitle">{data.role}</span>
        </span>
      </p>
      {/* TODO: Add X mark to close dropdown */}
    </div>
  );

  return (
    <div className="form-group">
      <h2 className="form-group-title">Officers</h2>
      <div className="editable-group">
        {saveSection}
        {!!editing && editSection}
      </div>
    </div>
  );
}

export default OfficerEdit;
