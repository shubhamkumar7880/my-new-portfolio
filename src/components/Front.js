import { Fragment, useContext } from "react";
import classes from "./Front.module.css";
import img1 from "./My_crop_pic.jpg";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import ReactWhatsapp from "react-whatsapp";
import { BsWhatsapp } from "react-icons/bs";
import ColorContext from "../Store/color-context";

const Front = (props) => {
  const ctx = useContext(ColorContext);

  let contact = !ctx.isNight ? classes.contact : classes.touch;
  let mail = !ctx.isNight ? classes.mail : classes.email;
  let first = !ctx.isNight ? classes.first : classes.one;
  let third = !ctx.isNight ? classes.third : classes.three;
  let pic = !ctx.isNight ? classes.pic : classes.photo;
  let projects = !ctx.isNight ? classes.projects : classes.project;

  let reactClass;
  let reactClasses;
  let jsClass;
  let jsClasses;
  let wpClass;
  let wpClasses;
  if (props.showValue === "react") {
    reactClass = classes.active;
    reactClasses = classes.present;
  } else {
    reactClass = "";
    reactClasses = "";
  }

  if (props.showValue === "js") {
    jsClass = classes.unactive;
    jsClasses = classes.unpresent;
  } else {
    jsClass = "";
    jsClasses = "";
  }

  if (props.showValue === "wp") {
    wpClass = classes.unactive;
    wpClasses = classes.unpresent;
  } else {
    wpClass = "";
    wpClasses = "";
  }
  let classReact = !ctx.isNight ? reactClass : reactClasses;
  let ClassJs = !ctx.isNight ? jsClass : jsClasses;
  let ClassWp = !ctx.isNight ? wpClass : wpClasses;

  return (
    <Fragment>
      <div className={contact}>
        <div className={classes.icon}>
          <BiPhoneCall size="1.5em" />
        </div>
        <a href="tel:8210019718">@ +91-8210019718</a>
      </div>
      <div className={mail}>
        <div className={classes.icon}>
          <AiOutlineMail size="1.5em" />
        </div>
        <a href="mailto:shubhamkumar7880@gmail.com">
          @ shubhamkumar7880@gmail.com
        </a>
      </div>
      <div className={classes.body}>
        <div className={classes.title}>
          <ReactWhatsapp
            number="+918210019718"
            message="Hello Sir!!!"
            className={classes.wa}
          >
            <BsWhatsapp size="4em" className={classes.what} />
          </ReactWhatsapp>

          <h1 className={first}>Hello, I'm</h1>
          <h1 className={classes.second}>Subham Kumar</h1>
          <h1 className={third}>Front-End Developer</h1>
        </div>
        <div className={classes.img}>
          <img src={img1} alt="My Pic" className={pic} />
        </div>
      </div>
      <div className={projects} id="projects">
        <h1>My Projects</h1>
      </div>
      <div className={classes.menu}>
        <h1 className={classReact} onClick={props.onShowReact}>
          React Projects
        </h1>
        <h1 className={ClassJs} onClick={props.onShowJS}>
          Vanilla-JS Projects
        </h1>
        <h1 className={ClassWp} onClick={props.onShowWP}>
          Wordpress Projects
        </h1>
      </div>
    </Fragment>
  );
};

export default Front;
