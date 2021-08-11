import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./AdminPage.scss";
function OfficerEdit(props) {
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
      <h2>Officers</h2>
      <div className="officer-group">
        <div className="officer-admin">
          <div onClick={() => setEditing(editing ^ true)}>
            <p>
              {data.name} - <span className="subtitle">{data.role}</span>
            </p>
            {/* TODO: Add X mark to close dropdown */}
          </div>

          {!!editing && (
            <div className="officer-admin-edit">
              <form onSubmit={handleSave}>
                <label>Name</label>
                <input
                  id="officer-name-edit"
                  className="form-control-small"
                  name="name"
                  defaultValue={data.name}
                  placeholder="First \0026 last name"
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
                <label>Ordering Index</label>
                <input
                  id="officer-order-edit"
                  className="form-control-small"
                  name="index"
                  type="number"
                  defaultValue={data.index}
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
                <button className="btn btn-primary" type="submit">
                  Save
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OfficerEdit;
