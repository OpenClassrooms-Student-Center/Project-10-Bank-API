import { FC } from "react";
import classes from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";
import Button from "../../components/Button";

const NotFound: FC = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(Routes.HOME);

  return (
    <section className={classes["root"]}>
      <i className="fa fa-frown-o"></i>
      <h1>This page doesn't exist</h1>
      <Button
        onClick={onClick}
        icon={<i className="fa fa-home" aria-hidden="true"></i>}
        iconPosition="end"
      >
        Go back to the home page
      </Button>
    </section>
  );
};

export default NotFound;
