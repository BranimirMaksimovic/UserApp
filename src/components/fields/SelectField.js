import { useState } from "react";

const SelectField = ({
  id,
  label,
  onChange,
  options,
  initialValue,
  ...props
}) => {
  let [value, setValue] = useState(initialValue);
  const onValueChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <label style={{ fontSize: 16, fontWeight: "bold" }} htmlFor={id}>
        {label}
      </label>
      <select
        {...props}
        id={id}
        name={id}
        onChange={onValueChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
