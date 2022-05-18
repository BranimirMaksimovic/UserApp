import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>User aplication</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New User</Link>
        <Link to="/edit">User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
