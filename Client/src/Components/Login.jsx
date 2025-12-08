// client/src/components/Login.jsx
import { useState } from "react";
import { post } from "../Utils/Api";

export default function Login({ onLogin }) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [msg,setMsg]=useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await post("/api/auth/login", { email, password });
    setMsg(res.message || JSON.stringify(res));
    if (res.token) {
      localStorage.setItem("token", res.token);
      if (onLogin) onLogin(res.user);
    }
  };

  return (
    <form onSubmit={submit} style={{maxWidth:400, margin:"auto"}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <div>{msg}</div>
    </form>
  );
}
