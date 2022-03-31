import { Fragment, useContext } from "react";
import classes from "./ThirdReact.module.css";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import ColorContext from "../Store/color-context";

const ThirdReact = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;
  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a
            href="https://react-meetups-phi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="meetup.png"
              alt="Great Quotes App Pic"
              className={classes.bhoj}
            />
          </a>
          <div className={classes.icon}>
            <div className={classes.next}>
              <SiNextdotjs size="1.5em" color="black" />
            </div>
            <img
              src="router.png"
              alt="react router icon"
              className={classes.router}
            />
            <SiMongodb size="1.5em" color="#4DB33D" />
          </div>
          <div className={classes.info}>
            <h2>Meetup App</h2>
            <p className={classes.para}>
              This is a meetup app that is made using Next.JS and Next/Router.
              It is a single page application in which we can add and schedule
              different meetings with their picture, location and the meeting
              description. We can also view these meetings in details. All
              meetings details are stored in mongoDB database and also these
              meetings are fetched directly from the mongoDB on the app. This
              app is hosted on vercel.
            </p>
            <h3>Stack</h3>
            <div className={classes.stack_body}>
              <div className={classes.stack}>
                <p>#Next.JS</p>
              </div>
              <div className={classes.stack}>
                <p>#Router</p>
              </div>
              <div className={classes.stack}>
                <p>#MongoDB</p>
              </div>
            </div>
          </div>
          <a
            href="https://react-meetups-phi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className={button}>Visit</button>
          </a>
          <a
            href="https://github.com/shubhamkumar7880/React-meetups"
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

export default ThirdReact;
