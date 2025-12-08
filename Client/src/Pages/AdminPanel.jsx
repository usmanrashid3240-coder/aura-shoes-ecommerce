import React from "react";
import "../styles/admin.css";

const AdminPanel = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>
      Access Denied — Admin Only
    </h2>;
  }

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <p>Welcome Admin — Messages & Users will appear here soon!</p>
    </div>
  );
};

export default AdminPanel;
