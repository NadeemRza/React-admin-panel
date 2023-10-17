import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login_container">
        <input
          type="text"
          placeholder="username"
          id="userName"
          className="login_input"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="login_input"
        />
        <button className="login_submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
