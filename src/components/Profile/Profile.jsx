import { useState } from "react";

import Broker from "../Broker/Broker";
import Users from "../Users/Users";
import Manager from "../Manager/Manager";

import s from "./Profile.module.css";

const Profile = () => {
  const [contentActiv, setContent] = useState({
    broker: true,
    manager: false,
    users: false,
  });
  return (
    
    <div className={s.block}>
      <div className={s.burger}>
        <button
          className={contentActiv.broker ? s.btn + ' ' + s.activ : s.btn}
          onClick={() =>
            setContent({ broker: true, manager: false, users: false })
          }
        >
          Broker
        </button>
        <button
          className={contentActiv.manager ? s.btn + ' ' + s.activ : s.btn}
          onClick={() =>
            setContent({ broker: false, manager: true, users: false })
          }
        >
          Manager
        </button>
        <button
          className={contentActiv.users ? s.btn + ' ' + s.activ : s.btn}
          onClick={() =>
            setContent({ broker: false, manager: false, users: true })
          }
        >
          User
        </button>
      </div>
      <div className={s.content}>
        {contentActiv.broker && <Users />}
        {contentActiv.manager && <Manager />}
        {contentActiv.users && <Broker />}
      </div>
    </div>
  );
};

export default Profile;
