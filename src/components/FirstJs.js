import { Fragment, useContext } from "react";
import classes from "./FirstJs.module.css";
import ColorContext from "../Store/color-context";

const FirstJs = () => {
  const ctx = useContext(ColorContext);
  let body = !ctx.isNight ? classes.body : classes.object;
  let container = !ctx.isNight ? classes.container : classes.cover;
  let button = !ctx.isNight ? classes.button : classes.btn;
  return (
    <Fragment>
      <div className={body}>
        <div className={container}>
          <a
            href="https://shubhamkumar7880.github.io/modern_coal/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="modern_coal.png"
              alt="Bhoj App Pic"
              className={classes.bhoj}
            />
          </a>
          <div className={classes.icon}>
            <img src="html.png" alt="html logo" />
          </div>
          <div className={classes.info}>
            <h2>Coal Business Software</h2>
            <p className={classes.para}>
              This is a coal Business customize software that is made by html5,
              css3 and modern javascript. This software has many features as it
              renders the name and address of the customer on the web which is
              editable also when we enter the gst number of that customer with
              the help of a third party API. Along with that, it also calculates
              the price of the coal according to it's rate and quantity. Along
              with that, it also adds gst, cgst, cess and other charges and
              convert the whole price in words which is also editable. Prices
              and descriptions can also be customized using HSN code. All bills
              are stored in localstorage, so that, we don't have to eneter the
              bill number again and again. Along with these features, all data
              are stored in a excelsheet for sales record which is done by
              submitting the whole form. This software is hosted on github.
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
            href="https://shubhamkumar7880.github.io/modern_coal/"
            target="_blank"
            rel="noreferrer"
          >
            <button className={button}>Visit</button>
          </a>
          <a
            href="https://github.com/shubhamkumar7880/modern_coal"
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

export default FirstJs;
