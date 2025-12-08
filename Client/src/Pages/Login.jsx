// import React, { useState } from "react";
// import "../styles/login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       alert("Login Successful!");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleLogin} className="auth-box">
//         <h2>Welcome Back</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// src/Pages/Login.jsx

// src/Pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import SubNavbar from "../Components/SubNavbar";
import { post } from "../Utils/Api";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setMsg("Logging in...");
    try {
      const res = await post("/api/auth/login", { email, password });
      if (res.token) {
        localStorage.setItem("token", res.token);
        if (onLogin) onLogin(res.user);
        setMsg("Login successful!");
        navigate("/"); // Redirect to home page
      } else {
        setMsg(res.message || "Invalid credentials");
      }
    } catch (error) {
      setMsg("Server error, try again.");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <SearchBar />
      <SubNavbar />

      {/* Login Form */}
      <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, boxShadow: "0 4px 10px rgba(0,0,0,0.1)", borderRadius: 10 }}
    >
        <h2 className="text-center text-5xl mt-5  text-green-700 font-semibold mb-8">Login</h2>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <input
            type="email"
            placeholder="Email" 
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: 10, borderRadius: 5, border: "1px solid #ccc" }}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: 10, borderRadius: 5, border: "1px solid #ccc", width: "100%" }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: 10, top: 10, cursor: "pointer", userSelect: "none" }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <button type="submit" style={{ padding: 10, borderRadius: 5, border: "none", backgroundColor: "green", color: "#fff", cursor: "pointer" }}>
            Login
          </button>
          {msg && <div style={{ color: msg.includes("successful") ? "green" : "red", textAlign: "center" }}>{msg}</div>}
        </form>
      </div>
    </div>
  );
}




// style={{ textAlign: "center", marginBottom: 20 }}