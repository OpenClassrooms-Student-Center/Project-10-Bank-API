import React from "react";
import { AiFillWarning } from "react-icons/ai";

export const TextInput = ({ id, label, register, errors }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        {...register(id, { required: `${label} non valide` })}
      />
      {errors[id] && (
        <div className="error-msg">
          <AiFillWarning className="logo-error" />
          <p className="error-message">{errors[id].message}</p>
        </div>
      )}
    </div>
  );
};

export const PasswordInput = ({ id, label, register, errors }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type="password"
        id={id}
        {...register(id, { required: `${label} non valide` })}
      />
      {errors[id] && (
        <div className="error-msg">
          <AiFillWarning className="logo-error" />
          <p className="error-message">{errors[id].message}</p>
        </div>
      )}
    </div>
  );
};
