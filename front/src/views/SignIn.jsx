import React from "react";
import Form from "../components/Form/Form";

export default function SignIn() {
  return (
    <>
      <div className="main sign-in-bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Connexion</h1>
          <Form />
        </section>
      </div>
    </>
  );
}
