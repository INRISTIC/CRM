import { Outlet } from "react-router-dom";

import s from "./Layout.module.css";

const Layout = () => {
  const menager = false;
  return (
    <>
      {menager ? (
        <div className={s.navBAr}>
          
        </div>
      ) : undefined}

      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;