import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useUserDispatch, useUserState } from "../../state/user/user";
import { post } from "../../axios";

import "./sign-in.scss";

export const SignIn = () => {
  const history = useHistory();
  const { error } = useUserState();
  const { signInSucess, signInFailure } = useUserDispatch();
  const [state, setState] = useState({ username: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = state;

    try {
      const {
        data: { token },
      } = await post({ username, password });
      if (token) history.push("/users");
      signInSucess(token);
    } catch (error) {
      signInFailure(error.response.data);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div className="wrap">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>Login Form</h3>
          <p>Login to access your dashboard</p>
        </div>
        <div className="form-group">
          <input
            name="username"
            type="text"
            className="form-input"
            placeholder="email@example.com"
            onChange={handleChange}
            value={state.username}
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-input"
            placeholder="password"
            onChange={handleChange}
            value={state.password}
          />
        </div>
        <div className="form-group">
          <button className="form-button" type="submit">
            Login
          </button>
        </div>
        {error ? <div className="form-footer">{error.error} !!!</div> : null}
      </form>
    </div>
  );
};
