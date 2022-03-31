import { Fragment, useContext } from "react";
import classes from "./About.module.css";
import ColorContext from "../Store/color-context";

const About = () => {
  const ctx = useContext(ColorContext);
  let about = !ctx.isNight ? classes.about : classes.intro;
  return (
    <Fragment>
      <div className={classes.container} id="about">
        <img src="about.png" alt="about" />
        <div className={about}>
          <h2>About Me</h2>
          <h1>Get to know me</h1>
          <p>
            Hello, I am <strong>Subham Kumar</strong> and I am a{" "}
            <strong>web developer</strong>. My expertise is in Front-End
            development. So, basically, I am a <strong>React developer</strong>.
            So, Through my past experiences, I can balance the need of users and
            businesses to understand their pain points and how I can contribute
            as a <strong>Front-end developer</strong> and solve their problems.
          </p>
          <h2>Past Experiences</h2>
          <p>
            Worked part time as a front-end developer at a startup company
            called <strong>Rise Technologies.</strong> from{" "}
            <strong>15th jan 2022 to 20th march 2022</strong>.
            <p>
              Apart from that, worked as a <strong>freelancer</strong> and has
              developed 3 projcets.
            </p>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
