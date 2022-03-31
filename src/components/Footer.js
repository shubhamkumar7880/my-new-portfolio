import { Fragment, useContext } from "react";
import classes from "./Footer.module.css";
import ColorContext from "../Store/color-context";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.box;

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <Fragment>
      <div className={body}>
        <h1>Let's Talk</h1>
        <Link to="/Contact">
          <button onClick={toTop}>
            <span>
              Let's chat <AiFillMessage />
            </span>
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Footer;
