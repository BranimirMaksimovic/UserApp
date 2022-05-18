import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";

const NewUser = ({ newUser, availableGenders }) => {
  return <NewUserForm newUser={newUser} availableGenders={availableGenders} />;
};

const NewUserForm = ({ newUser, availableGenders }) => {
  let [formState, setFormState] = useState({});

  const genderOptions = [...availableGenders].map((gender) => ({
    id: gender.toLowerCase(),
    value: gender.toLowerCase(),
    label: gender,
  }));

  let navigate = useNavigate();

  const onChangeInputValue = (id, value) => {
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    newUser(formState);
  };

  const onFormCancel = () => navigate("/", { replace: true });

  return (
    <form onSubmit={onFormSubmit}>
      <h1>Add new user</h1>
      <InputField
        id="first_name"
        label="First Name"
        onChange={(value) => onChangeInputValue("first_name", value)}
      />
      <InputField
        id="last_name"
        label="Last name"
        onChange={(value) => onChangeInputValue("last_name", value)}
      />
      <InputField
        type="email"
        id="email"
        label="E-mail"
        onChange={(value) => onChangeInputValue("email", value)}
      />
      <SelectField
        id="gender"
        label="Gender"
        options={genderOptions}
        onChange={(value) =>
          onChangeInputValue(
            "gender",
            `${value[0].toUpperCase() + value.slice(1)}`
          )
        }
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onFormCancel}>
        Cancel
      </button>
    </form>
  );
};

export default NewUser;
