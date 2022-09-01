import React, { useState } from "react";

import { addBaseUrl } from '../../helpers/BaseUrlHelper';

function LoginForm() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    const payload = { login, password };
    fetch(addBaseUrl('api/auth/login'), {
      method: "POST",
      body: JSON.stringify(payload)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <input onChange={(event) => setLogin(event.target.value)} id="login" type="text" name="login"></input>
      <label htmlFor="login">Login</label>
      <input onChange={(event) => setPassword(event.target.value)} id="password" type="password" name="password"></input>
      <label htmlFor="password">Password</label>
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default LoginForm;
