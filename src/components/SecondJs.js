import { Fragment, useContext } from "react";
import classes from "./SecondJs.module.css";
import ColorContext from "../Store/color-context";

const SecondJs = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;
  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a
            href="https://shubhamkumar7880.github.io/Meal-finder/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="meal.png"
              alt="Meal Finder App Pic"
              className={classes.bhoj}
            />
          </a>
          <div className={classes.icon}>
            <img src="html.png" alt="html logo" />
          </div>
          <div className={classes.info}>
            <h2>Meal Finder App</h2>
            <p className={classes.para}>
              This is a Meal Finder app that is made using HTML, CSS, and
              javascript. It is an app in which, we can search any meal and
              after that, it will show some results related to that meal. After
              that, we can click on any meal and get it's name, recepie, country
              of origin and ingredients required. All meals are directly fetched
              from a third party API. This app is hosted on github.
            </p>
            <h3>Stack</h3>
            <div className={classes.stack_body}>
              <div className={classes.stack}>
                <p>#HTML</p>
              </div>
              <div className={classes.stack}>
                <p>#CSS</p>
              </div>
              <div className={classes.stack}>
                <p>#JS</p>
              </div>
            </div>
          </div>
          <a
            href="https://shubhamkumar7880.github.io/Meal-finder/"
            target="_blank"
            rel="noreferrer"
          >
            <button className={button}>Visit</button>
          </a>
          <a
            href="https://github.com/shubhamkumar7880/Meal-finder"
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

export default SecondJs;
