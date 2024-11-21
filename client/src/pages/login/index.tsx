import { FC, useEffect } from "react";
import Button from "../../components/Button";
import classes from "./index.module.scss";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/routes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/auth/authActions";
import { authSelectors } from "../../redux/auth/authSelectors";
import useCookies from "../../hooks/useCookies";

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: FC = () => {
  const storedToken = useAppSelector(authSelectors.selectToken);
  const { cookies: token } = useCookies("token");

  const isLoading = useAppSelector(authSelectors.selectLoading);
  const isSuccessful = useAppSelector(authSelectors.selectSuccess);
  const isAuthenticated = !!token || !!storedToken;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => dispatch(login(data));

  useEffect(() => {
    if (isAuthenticated) {
      navigate(Routes.PROFILE);
    }
  }, [navigate, isAuthenticated, isSuccessful]);

  return (
    <section className={classes["root"]}>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form className={classes["form"]} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          formProps={register("email", {
            required: "Email address is required",
          })}
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          type="email"
          inputProps={{
            autoComplete: "email",
          }}
          isDirty={!!watch("email")}
        />
        <Input
          label="Password"
          formProps={register("password", {
            required: "Password is required",
          })}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          type="password"
          inputProps={{
            autoComplete: "current-password",
          }}
          isDirty={!!watch("password")}
        />
        <Input
          label="Remember me"
          formProps={register("rememberMe")}
          type="checkbox"
          isDirty={!!watch("rememberMe")}
        />
        <Button variant="contained" fullWidth submit isLoading={isLoading}>
          Sign In
        </Button>
      </form>
    </section>
  );
};

export default Login;
