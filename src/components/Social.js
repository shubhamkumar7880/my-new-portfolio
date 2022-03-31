import { Fragment } from "react";
import classes from "./Social.module.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsDownload,
} from "react-icons/bs";

const Social = () => {
  return (
    <Fragment>
      <div className={classes.body} id="follow">
        <div className={classes.container}>
          <h1>Let's Connect</h1>
          <h2>My Social</h2>
          <div className={classes.connect}>
            <div className={classes.media}>
              <a
                href="https://github.com/shubhamkumar7880"
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.social}>
                  <h2>Github</h2>
                  <BsGithub size="2em" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/subham-kumar-703547216/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.social}>
                  <h2>LinkedIn</h2>
                  <BsLinkedin size="2em" />
                </div>
              </a>
              <a href="resume.pdf" download>
                <div className={classes.social}>
                  <h2>Resume</h2>
                  <BsDownload size="2em" />
                </div>
              </a>
            </div>
            <div className={classes.media}>
              <a
                href="https://www.instagram.com/subhamkumar7880/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.social}>
                  <h2>Instagram</h2>
                  <BsInstagram size="2em" />
                </div>
              </a>
              <a
                href="https://twitter.com/shubhamkumar712"
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.social}>
                  <h2>Twitter</h2>
                  <BsTwitter size="2em" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/subhamkumar645/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={classes.social}>
                  <h2>Facebook</h2>
                  <BsFacebook size="2em" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Social;
