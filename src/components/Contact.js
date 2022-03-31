import React, { Fragment, useState } from "react";
import classes from "./Contact.module.css";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const isNotRequired = (value) => value;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState("submit");
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: mobileNumberValue,
    isValid: mobileNumberIsValid,
    hasError: mobileNumberHasError,
    valueChangeHandler: mobileNumberChangeHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: resetMobileNumber,
  } = useInput(isNotEmpty);

  const {
    value: messageValue,
    valueChangeHandler: messageChangeHandler,
    reset: resetMessage,
  } = useInput(isNotRequired);

  let formIsValid = false;

  if (fullNameIsValid && mobileNumberIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    setIsSubmitting("submitting");
    await fetch(
      "https://data-31c22-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: fullNameValue,
          email: emailValue,
          number: mobileNumberValue,
          mesaage: messageValue,
        }),
      }
    );
    resetFullName();
    resetMobileNumber();
    resetEmail();
    resetMessage();
    setIsSubmitting("submitted");
    setTimeout(() => {
      setIsSubmitting("submit");
    }, 3000);
  };

  const fullNameClasses = fullNameHasError ? classes.invalid : classes.box;

  const mobileNumberClasses = mobileNumberHasError
    ? classes.invalid
    : classes.box;

  const emailClasses = emailHasError ? classes.invalid : classes.box;

  let text;
  if (isSubmitting === "submit") {
    text = <span>Submit</span>;
  }
  if (isSubmitting === "submitting") {
    text = <span>Submitting....</span>;
  }
  if (isSubmitting === "submitted") {
    text = <span>Submitted</span>;
  }

  return (
    <Fragment>
      <div className={classes.body}>
        <div className={classes.container}>
          <img src="contact.png" alt="contact" />
          <div className={classes.contact}>
            <h1>Contact</h1>
            <p>Fill up the form below to send a message.</p>
            <form onSubmit={submitHandler}>
              <div className={fullNameClasses}>
                <label htmlFor="name">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter Your Name."
                  value={fullNameValue}
                  onChange={fullNameChangeHandler}
                  onBlur={fullNameBlurHandler}
                  required
                />
                {fullNameHasError && <p>Please enter the full name.</p>}
              </div>
              <div className={emailClasses}>
                <label htmlFor="Email">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email."
                  value={emailValue}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  required
                />
                {emailHasError && <p>Please enter a valid email.</p>}
              </div>
              <div className={mobileNumberClasses}>
                <label htmlFor="Mobile_Number">Mobile Number</label>
                <input
                  type="number"
                  placeholder="Enter Your Mobile Number."
                  value={mobileNumberValue}
                  onChange={mobileNumberChangeHandler}
                  onBlur={mobileNumberBlurHandler}
                  required
                />
                {mobileNumberHasError && (
                  <p>Please enter a valid mobile number.</p>
                )}
              </div>
              <div className={classes.box}>
                <label htmlFor="Message">Message</label>
                <textarea
                  placeholder="Enter Your Message."
                  value={messageValue}
                  onChange={messageChangeHandler}
                />
              </div>
              <div className={classes.button}>
                <button className={classes.noselect}>{text}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
