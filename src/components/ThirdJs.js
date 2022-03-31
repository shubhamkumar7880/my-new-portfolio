import { Fragment, useContext } from "react";
import classes from "./ThirdJs.module.css";
import ColorContext from "../Store/color-context";

const ThirdJs = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;
  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a
            href="https://shubhamkumar7880.github.io/speech-text-reader/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="sppech.png"
              alt="Sppech text reader App Pic"
              className={classes.bhoj}
            />
          </a>
          <div className={classes.icon}>
            <img src="html.png" alt="html logo" />
          </div>
          <div className={classes.info}>
            <h2>Speech Text Reader</h2>
            <p className={classes.para}>
              This is a speech text reader app that is made using HTML, CSS, and
              Javascript. To enable the voices in the app, we have used speech
              synthesis web API. It is a single page application that is very
              helpful for dumb(people who can't speak) type of people. It
              contains many customized texts with pictures, so, by clicking on
              them, the computer or mobile will read whatever the meassge will
              be. So, any dumb person can communicate easily using this. It also
              contains a text box, where we can type anything we want to say and
              the computer or mobile will read that text or message for us. It
              also contain many voices where we can select a particular voice to
              read our text.All voices are fetched from speech synthesis web
              API. This app is hosted on github.
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
            href="https://shubhamkumar7880.github.io/speech-text-reader/"
            target="_blank"
            rel="noreferrer"
          >
            <button className={button}>Visit</button>
          </a>
          <a
            href="https://github.com/shubhamkumar7880/speech-text-reader"
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

export default ThirdJs;
