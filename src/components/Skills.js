import { Fragment, useContext } from "react";
import classes from "./Skills.module.css";
import ColorContext from "../Store/color-context";

const Skills = () => {
  const ctx = useContext(ColorContext);
  let container = !ctx.isNight ? classes.container : classes.box;
  return (
    <Fragment>
      <div className={container} id="skills">
        <h1>Tech Skills</h1>
        <div className={classes.flex}>
          <div className={classes.center}>
            <div className={classes.skills}>
              <div className={classes.skill}>
                <span>HTML</span>
              </div>
              <div className={classes.skill}>
                <span>CSS</span>
              </div>
              <div className={`${classes.skill} ${classes.margin}`}>
                <span>BootStrap</span>
              </div>
            </div>
            <div className={classes.second}>
              <div className={classes.skill}>
                <span>JavaScript</span>
              </div>
              <div className={classes.skill}>
                <span>React JS</span>
              </div>
              <div className={`${classes.skill} ${classes.margin}`}>
                <span>Next JS</span>
              </div>
            </div>
            <div className={classes.second}>
              <div className={`${classes.wp} ${classes.right}`}>
                <span>WordPress</span>
              </div>
              <div className={classes.skill}>
                <span>WordPress</span>
              </div>
            </div>
          </div>

          <div className={classes.image}>
            <img src="skill.png" alt="skills" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
