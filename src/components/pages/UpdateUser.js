import { useParams } from "react-router-dom";

const UpdateUser = ({ findUser, updateUser }) => {
  let { userId } = useParams();

  let user = findUser(userId);
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return <UpdateUserForm {...user} updateUser={updateUser} />;
};

const UpdateUserForm = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  updateUser,
}) => {
  return (
    <div>
      <div>Update stranica</div>
      {id}
      <h1>
        {first_name} {last_name}
      </h1>
      <h2>{email}</h2>
      <h3>{gender}</h3>
      <button onClick={() => updateUser(id)}>Save</button>
    </div>
  );
};

export default UpdateUser;
