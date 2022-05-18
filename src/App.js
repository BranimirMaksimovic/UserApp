import Navbar from "./components/Navbar";
import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import NewUser from "./components/pages/NewUser";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import data from "./data/data.json";
import UpdateUser from "./components/pages/UpdateUser";
import DeleteUser from "./components/pages/DeleteUser";

function App() {
  const [users, setUsers] = useState(data.users);

  let navigate = useNavigate();

  const availableGenders = new Set([...data.users.map(({ gender }) => gender)]);

  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    navigate("/", { replace: true });
  };

  const newUser = (newUser) => {
    let lastUser = users[users.length - 1];
    let newUserId = lastUser.id + 1;
    let newUsers = [...users, { id: newUserId, ...newUser }];
    setUsers(newUsers);
    navigate("/", { replace: true });
  };

  const updateUser = (updatedUser) => {
    let itemIndex = users.findIndex((user) => user.id === updatedUser.id);
    let tempUsers = users;
    tempUsers.splice(itemIndex, 1, updatedUser);
    setUsers(tempUsers);
    navigate("/", { replace: true });
  };

  const findUser = (id) => users.find((user) => user.id === Number(id));

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="users">
            <Route
              path="create"
              element={
                <NewUser
                  newUser={newUser}
                  availableGenders={availableGenders}
                />
              }
            />
            <Route path=":userId" element={<User findUser={findUser} />} />
            <Route
              path="update/:userId"
              element={
                <UpdateUser
                  findUser={findUser}
                  updateUser={updateUser}
                  availableGenders={availableGenders}
                />
              }
            />
            <Route
              path="delete/:userId"
              element={
                <DeleteUser findUser={findUser} deleteUser={deleteUser} />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
