import { Fragment } from "react";
import FirstJs from "./FirstJs";
import SecondJs from "./SecondJs";
import ThirdJs from "./ThirdJs";
import classes from "./JsProjects.module.css";

const JsProjects = () => {
  return (
    <Fragment>
      <div className={classes.bottom}>
        <FirstJs />
        <SecondJs />
        <ThirdJs />
      </div>
    </Fragment>
  );
};

export default JsProjects;
