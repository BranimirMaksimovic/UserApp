import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserTile key={user.id} {...user} />
      ))}
    </div>
  );
};

const UserTile = ({ id, first_name, last_name, email, gender }) => {
  return (
    <div className="user-list-preview">
      {/*id*/}
      <h2>
        <strong>User:</strong> {first_name} {last_name}
      </h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <div className="user-list-preview-links">
        <p>
          <Link to={`/users/${id}`}>Go to user</Link>
        </p>

        <p>
          <Link to={`/users/delete/${id}`}>Delete user</Link>
        </p>
        <p>
          <Link to={`/users/update/${id}`}>Update user</Link>
        </p>
      </div>
    </div>
  );
};

export default UserList;
