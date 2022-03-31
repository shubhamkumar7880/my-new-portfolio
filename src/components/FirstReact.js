import { Fragment, useContext } from "react";
import classes from "./FirstReact.module.css";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import ColorContext from "../Store/color-context";

const FirstReact = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;
  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a href="https://bhoj.vercel.app/" target="_blank" rel="noreferrer">
            <img src="bhoj.png" alt="Bhoj App Pic" className={classes.bhoj} />
          </a>
          <div className={classes.icon}>
            <FaReact size="1.5em" color="#61DBFB" className={classes.react} />
            <IoLogoFirebase size="1.5em" color="#FFCB2B" />
          </div>
          <div className={classes.info}>
            <h2>Food Ordering App</h2>
            <p className={classes.para}>
              This is a Food ordering app that is made using React. It is a
              single page application that includes almost all features that a
              basic E-commerce app contains like adding items to cart, removing
              items from cart, increasing or decreasing cart items, order modal
              and order details form. All ordered data are stored in firebase
              database and all meals and their prices are fetched from firebase
              database on the app. This app is hosted on vercel.
            </p>
            <h3>Stack</h3>
            <div className={classes.stack_body}>
              <div className={classes.stack}>
                <p>#React</p>
              </div>
              <div className={classes.stack}>
                <p>#Firebase</p>
              </div>
            </div>
          </div>
          <a href="https://bhoj.vercel.app/" target="_blank" rel="noreferrer">
            <button className={button}>Visit</button>
          </a>
          <a
            href="https://github.com/shubhamkumar7880/bhoj/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            <button className={button}>Code</button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default FirstReact;
