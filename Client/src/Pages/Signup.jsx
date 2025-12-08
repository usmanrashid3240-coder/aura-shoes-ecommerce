import React, { useState } from "react";
import { toast } from "react-toastify";
import SearchBar from "../Components/SearchBar";
import SubNavbar from "../Components/SubNavbar";
import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Account created successfully!");
        setFormData({ name: "", email: "", password: "" });
      } else {
        toast.error(data.error || "Server error. Try again later!");
      }
    } catch (err) {
      toast.error("Server error. Try again later!");
      console.error(err);
    }
  };

  return (
    <div>
      <SearchBar />
      <SubNavbar />

      <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
