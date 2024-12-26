import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandlers = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => submithandlers(e)}
          className="flex flex-col items-center justify-center "
        >
          <input
            required
            className="border-2 border-emerald-600 py-3 px-5 rounded-full text-xl  outline-none bg-transparent placeholder:text-gray-500"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <input
            required
            className="border-2 border-emerald-600 py-3 px-5 rounded-full text-xl  outline-none bg-transparent mt-4 placeholder:text-gray-500"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
          />
          <button className=" mt-5 border-none bg-emerald-600 py-3 px-5 rounded-full text-xl  outline-none">
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
