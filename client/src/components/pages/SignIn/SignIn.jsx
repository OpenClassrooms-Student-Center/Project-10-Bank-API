import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../store/auth/actions.creator";
import ROUTES from "../../../constants/routes";

function SignIn() {
  const { authenticated, error } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = credentials => dispatch(login(credentials));

  useEffect(() => {
    if (authenticated) {
      navigate(ROUTES.PROFILE);
    }
  }, [authenticated, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register("email", { required: true })} />
            {errors.email?.type === "required" && "Email is required"}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password", { required: true })} />
            {errors.password?.type === "required" && "Password is required"}
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
