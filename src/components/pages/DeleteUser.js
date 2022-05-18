import { useParams } from "react-router-dom";

const DeleteUser = ({ findUser, deleteUser }) => {
  let { userId } = useParams();

  let user = findUser(userId);
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return <DeleteUserForm {...user} deleteUser={deleteUser} />;
};

const DeleteUserForm = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  deleteUser,
}) => {
  return (
    <div>
      <div>Stranica za brisanje</div>
      {id}
      <h1>
        {first_name} {last_name}
      </h1>
      <h2>{email}</h2>
      <h3>{gender}</h3>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </div>
  );
};

export default DeleteUser;
