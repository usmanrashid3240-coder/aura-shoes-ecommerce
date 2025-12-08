import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSend = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/message/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="contact-container">
      <form className="contact-box" onSubmit={handleSend}>
        <h2>Contact Us</h2>

        <input type="text" placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input type="email" placeholder="Your Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea placeholder="Your Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
