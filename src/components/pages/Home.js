import Users from "../Users";

const Home = ({ users }) => {
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default Home;
