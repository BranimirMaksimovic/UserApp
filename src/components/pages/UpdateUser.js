import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";

const UpdateUser = ({ findUser, updateUser, availableGenders }) => {
  let { userId } = useParams();

  const genderOptions = [...availableGenders].map((gender) => ({
    id: gender.toLowerCase(),
    value: gender.toLowerCase(),
    label: gender,
  }));

  let user = findUser(userId);
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return (
    <UpdateUserForm
      {...user}
      updateUser={updateUser}
      genderOptions={genderOptions}
    />
  );
};

const UpdateUserForm = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  updateUser,
  genderOptions,
}) => {
  let [formState, setFormState] = useState({
    first_name,
    last_name,
    email,
    gender,
  });

  let navigate = useNavigate();

  const onChangeInputValue = (id, value) => {
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    updateUser({ id, ...formState });
  };

  const onFormCancel = () => navigate("/", { replace: true });

  return (
    <form onSubmit={onFormSubmit}>
      <h1>Update user: {id}</h1>
      <InputField
        id="first_name"
        label="First Name"
        initialValue={first_name}
        onChange={(value) => onChangeInputValue("first_name", value)}
      />
      <InputField
        id="last_name"
        label="Last name"
        initialValue={last_name}
        onChange={(value) => onChangeInputValue("last_name", value)}
      />
      <InputField
        type="email"
        id="email"
        label="E-mail"
        initialValue={email}
        onChange={(value) => onChangeInputValue("email", value)}
      />
      <SelectField
        id="gender"
        label="Gender"
        options={genderOptions}
        initialValue={gender}
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

export default UpdateUser;
