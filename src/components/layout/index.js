import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "../header";
import { TopBanner } from "../top-bar";

const Layout = () => {
  return (
    <>
      {/* <TopBanner /> */}
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
