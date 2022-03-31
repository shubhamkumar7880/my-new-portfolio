import { Fragment } from "react";
import Front from "./Front";
import ReactProjects from "./ReactProjects";
import JsProjects from "./JsProjects";
import WpProjects from "./WpProjects";
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Social from "./Social";

const Home = () => {
  let content;
  const [show, setShow] = useState("react");

  const showJS = () => {
    setShow("js");
  };

  const showReact = () => {
    setShow("react");
  };

  const showWp = () => {
    setShow("wp");
  };

  if (show === "react") {
    content = <ReactProjects />;
  }

  if (show === "js") {
    content = <JsProjects />;
  }

  if (show === "wp") {
    content = <WpProjects />;
  }
  return (
    <Fragment>
      <Front
        onShowReact={showReact}
        onShowJS={showJS}
        onShowWP={showWp}
        showValue={show}
      />
      {content}
      <About />
      <Skills />
      <Social />
    </Fragment>
  );
};

export default Home;
