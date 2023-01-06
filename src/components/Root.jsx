import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Autorization from "./Autorization/Autorization";
import Layout from "./Layout/Layout";
import Manager from "./Manager/Manager";
import Users from "./Users/Users";
import Broker from "./Broker/Broker";
import Profile from "./Profile/Profile";
import Modal from "./Modal/Modal";
import s from "./Root.module.css";

function App() {
  const [modalActive, setModalActive] = useState(false)
  const manager =  false;
  const user =   true;

  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Autorization />} />
          <Route path="/users" element={<Users />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default App;
