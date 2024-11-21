import { FC } from "react";
import classes from "./index.module.scss";
import classNames from "classnames";

type Props = {
  icon: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  submit?: boolean;
  color?: "default" | "primary" | "secondary" | "inherit";
  shape?: "circle" | "rounded";
};

const IconButton: FC<Props> = ({
  icon = <span>?</span>,
  onClick = () => {},
  disabled,
  submit,
  color = "default",
  shape = "circle",
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type={submit ? "submit" : "button"}
    className={classNames(classes["root"], classes[color], classes[shape])}
  >
    {icon}
  </button>
);

export default IconButton;
