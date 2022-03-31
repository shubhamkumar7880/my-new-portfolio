import React, { useContext, useState } from "react";
import classes from "./MainNavigation.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { WiDayCloudy } from "react-icons/wi";
import { IoIosCloudyNight } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import ColorContext from "../Store/color-context";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleBar = () => {
    setShowMenu(!showMenu);
  };

  const ctx = useContext(ColorContext);
  let header = !ctx.isNight ? classes.header : classes.day;
  let list = showMenu ? classes.unlist : classes.list;

  return (
    <div className={classes.body}>
      <header className={header}>
        <Link to="/Home">
          <div className={classes.logo}>My Portfolio</div>
        </Link>
        <nav>
          <ul className={list}>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link smooth to="/Home#about">
                About
              </Link>
            </li>
            <li>
              <Link smooth to="/Home#projects">
                Projects
              </Link>
            </li>

            <li>
              <Link smooth to="/Home#follow">
                Follow
              </Link>
            </li>
            <li>
              <Link smooth to="/Contact">
                <button className={classes.button}>Contact</button>
              </Link>
            </li>
            <li>
              <span className={classes.icon} onClick={ctx.onToggle}>
                {!ctx.isNight && <WiDayCloudy size="1.8em" />}
                {ctx.isNight && (
                  <IoIosCloudyNight size="1.8em" className={classes.night} />
                )}
              </span>
            </li>
          </ul>

          <div className={classes.show} onClick={toggleBar}>
            {!showMenu && <AiOutlineClose size="1.8em" />}
            {showMenu && <HiMenuAlt1 size="1.8em" />}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MainNavigation;
