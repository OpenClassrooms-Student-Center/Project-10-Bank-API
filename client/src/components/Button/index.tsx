import { ButtonHTMLAttributes, FC } from "react";
import classes from "./index.module.scss";
import classNames from "classnames";

type Props = {
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: string | JSX.Element | JSX.Element[];
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
  submit?: boolean;
  isLoading?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: FC<Props> = ({
  variant = "text",
  color = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  children,
  icon,
  iconPosition = "start",
  submit = false,
  isLoading,
  buttonProps,
}) => {
  return (
    <button
      className={classNames(
        classes["root"],
        classes[`${variant}-${color}`],
        classes[size],
        {
          [classes["full-width"]]: fullWidth,
          [classes["disabled"]]: disabled,
          [classes["loading"]]: isLoading,
        }
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
      type={submit ? "submit" : "button"}
      {...buttonProps}
    >
      {isLoading ? (
        <span className={classes["loader"]}>
          <i className="fa fa-spinner fa-spin"></i>
        </span>
      ) : (
        <>
          {icon && iconPosition === "start" && icon}
          {typeof children === "string" ? <span>{children}</span> : children}
          {icon && iconPosition === "end" && icon}
        </>
      )}
    </button>
  );
};

export default Button;
