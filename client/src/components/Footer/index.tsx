import { FC } from "react";
import classes from "./index.module.scss";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { Routes } from "../../router/routes";

const Footer: FC = () => {
  const location = useLocation();

  return (
    <footer
      className={classNames(classes["footer"], {
        [classes["shadow"]]: location.pathname.includes(Routes.ACCOUNT),
      })}
    >
      <p className={classes["footer-text"]}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

export default Footer;
