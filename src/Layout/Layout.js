import { Fragment, useContext } from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "../components/Footer";
import ColorContext from "../Store/color-context";

const Layout = (props) => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.day;
  return (
    <Fragment>
      <div className={body}>
        <MainNavigation />
        <main>{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
