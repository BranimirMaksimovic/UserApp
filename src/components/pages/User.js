import { useParams } from "react-router-dom";

const User = ({ findUser }) => {
  let { userId } = useParams();

  let user = findUser(userId);
  if (!userId) return <div>userId undefind</div>;
  if (!user) return <div>User with that id not found</div>;

  return <UserInformation {...user} />;
};

const UserInformation = ({ id, first_name, last_name, email, gender }) => {
  return (
    <div>
      {id}
      <h1>
        {first_name} {last_name}
      </h1>
      <h2>{email}</h2>
      <h3>{gender}</h3>
    </div>
  );
};

export default User;
