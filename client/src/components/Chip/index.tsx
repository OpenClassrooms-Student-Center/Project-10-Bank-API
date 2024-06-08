import { FC } from "react";
import classes from "./index.module.scss";
import classNames from "classnames";

type Props = {
  label: string | number | JSX.Element;
  type?: "default" | "success" | "error" | "warning" | "info";
  onClick?: () => void;
};

const Chip: FC<Props> = ({ label, type = "default", onClick }) => {
  return (
    <div
      className={classNames(classes["root"], classes[type], {
        [classes["clickable"]]: !!onClick,
      })}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
    >
      {label}
    </div>
  );
};

export default Chip;
