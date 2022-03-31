import { Fragment, useContext } from "react";
import classes from "./FirstWp.module.css";
import ColorContext from "../Store/color-context";

const FirstWp = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;

  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a href="https://weitsolution.com/" target="_blank" rel="noreferrer">
            <img src="weit.png" alt="WEIT Pic" className={classes.bhoj} />
          </a>
          <div className={classes.icon}>
            <img src="wp.png" alt="html logo" />
          </div>
          <div className={classes.info}>
            <h2>WeITSolution.com</h2>
            <p className={classes.para}>
              This is a business website that is made using Wordpress. It
              contains Astra theme and the page builder use to build this
              website is elementor. This website offers digital solutions like
              website development and digital marketting. This is a mobile &
              tablet responsive website. Some of the plugins use to build this
              website are elementor, Ninja forms, smart slider 3, elementor
              addon, etc. This website is hosted on IONOS.com.
            </p>
            <h3>Themes & Plugins</h3>
            <div className={classes.stack_body}>
              <div className={classes.stack}>
                <p>#Astra</p>
              </div>
              <div className={classes.stack}>
                <p>#Elementor</p>
              </div>
            </div>
          </div>
          <div className={classes.center}>
            <a
              href="https://weitsolution.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className={button}>Visit</button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FirstWp;
