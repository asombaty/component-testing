import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
// Removed import of loginIcon.jpg; use public path instead
import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const history = useHistory();

  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  const onSubmit = (data) => {
    setLoginError("");
    if (data.email === correctEmail && data.password === correctPassword) {
      history.push("/success");
    } else {
      setLoginError("Email or Password is not matching with our records");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "24px" }}>Login Form</h2>

      <img src="/loginIcon.jpg" alt="Login Icon" className="login-icon" />

      <form className="Login" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          autoComplete="off"
        />

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          autoComplete="off"
        />
        {errors.password && (
          <span style={{ color: "red" }}>*Password* is mandatory</span>
        )}

        <button
          type="submit"
          style={{ backgroundColor: "#a1eafb", marginTop: "16px" }}
        >
          Login
        </button>
        {loginError && (
          <div style={{ color: "red", marginTop: "12px" }}>{loginError}</div>
        )}
      </form>
    </div>
  );
}

export default Login;
