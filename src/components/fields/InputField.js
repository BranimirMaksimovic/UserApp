import { useState } from "react";

const InputField = ({
  id,
  label,
  type = "text",
  onChange,
  initialValue = "",
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
      <label htmlFor={id} style={{ fontSize: 16, fontWeight: "bold" }}>
        {label}
      </label>
      <input
        style={{ fontSize: 16 }}
        {...props}
        type={type}
        id={id}
        name={id}
        onChange={onValueChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
