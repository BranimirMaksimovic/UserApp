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
  // funkcija koje je definisana od strane react router dom paketa, moze se procitati vise u dokumentaciji
  // ova funkcija dozvoljava nam da se krecemo u sklop aplikacije, koristeci pre-definisane rute u App.js

  //koristimo map funkciju i za svakog korisnika izvlacimo Gender value iz objekta
  //nakon sto smo mapirali array korisnika iz array-a objekata u array stringova koji sadrze samo njihove gendere
  //koristimo constructor za Set i ostavljamo samo unikatne primjerke Gendera. (ako imamo ["Female", "Female", "Male"], ostace nam samo ["Female", "Male"])
  // jer u ovom slucaju Female je duplikat
  const availableGenders = new Set([...data.users.map(({ gender }) => gender)]);

  const deleteUser = (id) => {
    //filtriramo korisnika uz pomoc ID-a i samim time ga brisemo iz array-a
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    // funkcija za navigaciju ka stranicama
    navigate("/", { replace: true });
  };

  const newUser = (newUser) => {
    //uzimamo posljednjeg korisnika u arrayu, tako sto korisitimo funkciju length (koja nam vraca zbir objekata u istom) i onda oduzimamo 1 jer array brojanje pocinje od 0
    let lastUser = users[users.length - 1];
    //posljednji korisnicki ID upisani uvecavamo za 1 i u ovom slucaju dobijamo najveci moguci ID u array-u samim time je i unikatan
    let newUserId = lastUser.id + 1;
    // pravimo kopiju trenutnih korisnika, izvucene informacije o novom korisniku dodajemo u objekat zajedno sa ID-em uz pomoc spread operatora i samim time formiramo korisnicki objekat
    let newUsers = [...users, { id: newUserId, ...newUser }];
    setUsers(newUsers);
    //funkcija ka navigaciju ka stranicama (u ovom slucaju ka pocetnoj "Home")
    navigate("/", { replace: true });
  };

  const updateUser = (updatedUser) => {
    //nalazimo indeks korisnika da bi mogli da ga iscupamo iz arraya i zamjenimo
    let itemIndex = users.findIndex((user) => user.id === updatedUser.id);
    //pravimo clone korisnika da bi mogli da manipulisemo sa istim kroz splice
    let tempUsers = users;
    //splice koristimo da izbacimo stari objekat gdje se sadrze informacije o korisniku i zamjenimo ih sa novim izmjenjenim
    tempUsers.splice(itemIndex, 1, updatedUser);
    setUsers(tempUsers);
    //funkcija za navigaciju ka stranicama
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
