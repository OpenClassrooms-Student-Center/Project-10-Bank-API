import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../redux/authentificationslice";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/api";
import { AiFillWarning } from "react-icons/ai";

export default function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setValue("email", rememberedEmail);
      setValue("password", rememberedPassword);
      setValue("rememberMe", true);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    const { email, password, rememberMe } = data;

    try {
      const token = await loginUser(email, password);
      dispatch(signIn(token));

      localStorage.setItem("token", token);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }

      navigate("/user");
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      // Gérer l'erreur ici
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: "Email non valide" })}
        />
        {errors.email && (
          <div className="error-msg">
            <AiFillWarning className="logo-error" />
            <p className="error-message">{errors.email.message}</p>
          </div>
        )}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Mot de passe non valide" })}
        />
        {errors.password && (
          <div className="error-msg">
            <AiFillWarning className="logo-error" />
            <p className="error-message">{errors.password.message}</p>
          </div>
        )}
      </div>
      <div className="input-remember">
        <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
}
