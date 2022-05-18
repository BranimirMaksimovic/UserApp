import Navbar from "./components/Navbar";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import NewUser from "./components/pages/NewUser";
import Home from "./components/pages/Home";
import User from "./components/pages/User";
import data from "./data/data.json";
import UpdateUser from "./components/pages/UpdateUser";
import DeleteUser from "./components/pages/DeleteUser";

function App() {
  const [users, setUsers] = useState(data.users);

  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const updateUser = (id) => {
    console.log("Apdejtovan korisnik", id);
  };

  const findUser = (id) => users.find((user) => user.id === Number(id));

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="users">
            <Route path="create" element={<NewUser />} />
            <Route path=":userId" element={<User findUser={findUser} />} />
            <Route
              path="update/:userId"
              element={
                <UpdateUser findUser={findUser} updateUser={updateUser} />
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
