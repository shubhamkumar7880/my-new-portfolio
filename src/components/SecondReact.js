import { Fragment, useContext } from "react";
import classes from "./SecondReact.module.css";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import ColorContext from "../Store/color-context";

const SecondReact = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;
  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a
            href="https://data-31c22.web.app/quotes"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="Quotes.png"
              alt="Great Quotes App Pic"
              className={classes.bhoj}
            />
          </a>
          <div className={classes.icon}>
            <FaReact size="1.5em" color="#61DBFB" className={classes.react} />
            <img
              src="router.png"
              alt="react router icon"
              className={classes.router}
            />
            <IoLogoFirebase size="1.5em" color="#FFCB2B" />
          </div>
          <div className={classes.info}>
            <h2>Quotes Keeper App</h2>
            <p className={classes.para}>
              This is a Quotes keeper app that is made using React and React
              Router. It is a single page application in which we can add and
              keep different quotes along with their author name. We can also
              view these quotes in details and also comment our thoughts on that
              quote. All quotes are stored in firebase database and also these
              quotes are fetched directly from the firebase on the app. This app
              is hosted on Firebase.
            </p>
            <h3>Stack</h3>
            <div className={classes.stack_body}>
              <div className={classes.stack}>
                <p>#React</p>
              </div>
              <div className={classes.stack}>
                <p>#Router</p>
              </div>
              <div className={classes.stack}>
                <p>#Firebase</p>
              </div>
            </div>
          </div>
          <a
            href="https://data-31c22.web.app/quotes"
            target="_blank"
            rel="noreferrer"
          >
            <button className={button}>Visit</button>
          </a>
          <a
            href="https://github.com/shubhamkumar7880/Great-Quotes"
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

export default SecondReact;
