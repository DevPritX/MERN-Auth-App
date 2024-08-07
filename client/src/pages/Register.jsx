import React, { useRef } from "react";
import { Navigate, redirect } from "react-router-dom";

const Register = () => {
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const registerDataHandler = (ev) => {
    ev.preventDefault();
    const formData = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(formData);
    localStorage.setItem("user", JSON.stringify(formData));

    // Clear Inputs
    emailRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <form
      id="register"
      className="mx-auto mt-5 p-5 max-w-md h-auto flex flex-col gap-5 bg-green-500 rounded"
      onSubmit={registerDataHandler}
    >
      <h1 className="mx-auto text-white font-medium text-2xl">Register</h1>
      <input
        type="text"
        id="email"
        required
        ref={emailRef}
        placeholder="Email?"
        className="w-[60%] mx-auto py-1 px-4 font-medium text-sm border-white bg-white rounded-md text-green-800 placeholder:text-green-500 placeholder:text-sm placeholder:font-normal outline-none border-2 border-transparent focus:border-2 focus:border-green-800"
      />
      <input
        type="text"
        id="username"
        required
        ref={usernameRef}
        placeholder="Username?"
        className="w-[60%] mx-auto py-1 px-4 font-medium text-sm border-white bg-white rounded-md text-green-800 placeholder:text-green-500 placeholder:text-sm placeholder:font-normal outline-none border-2 border-transparent focus:border-2 focus:border-green-800"
      />
      <input
        type="text"
        id="password"
        required
        ref={passwordRef}
        placeholder="Password?"
        className="w-[60%] mx-auto py-1 px-4 font-medium text-sm border-white bg-white rounded-md text-green-800 placeholder:text-green-500 placeholder:text-sm placeholder:font-normal outline-none border-2 border-transparent focus:border-2 focus:border-green-800"
      />
      <button
        type="submit"
        className="mx-auto px-5 py-1 uppercase bg-white text-green-600 font-medium text-lg rounded"
      >
        Register
      </button>
      <p className="text-white/90 text-base font-normal">
        I have already an account{" "}
        <a href="/login" className="font-bold text-lg  underline text-white">
          Login
        </a>
      </p>
    </form>
  );
};

export default Register;
