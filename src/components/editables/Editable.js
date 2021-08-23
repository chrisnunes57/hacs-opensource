// Editable.js
import React, { useState } from "react";

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const Editable = ({
  id,
  name,
  type,
  placeholder,
  defaultValue,
  required,
  min,
  max,
  handleChange,
  content
}) => {
  const [isEditing, setEditing] = useState(false);

  return isEditing ? (
    <input
      id={`${id}-edit`}
      className="form-control-small"
      name={name}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      min={min}
      max={max}
      required={required}
      onChange={handleChange}
    />
  ) : (
    <div onClick={() => setEditing(isEditing ^ true)}>{content}</div>
  );
};

export default Editable;
