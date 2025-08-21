import React from "react";

function Success() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center", marginTop: "24px" }}>
        Login Successful!
      </h2>
      <img
        src="/login-success.jpg"
        alt="Success Icon"
        className="center-image"
      />
    </div>
  );
}
export default Success;