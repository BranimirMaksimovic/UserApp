import UserList from "./UserList";

const Users = ({ users }) => {
  return (
    <div className="users">
      <UserList users={users} />
    </div>
  );
};

export default Users;
