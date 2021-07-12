import { Link } from "react-router-dom";

import googleIcon from "../../assets/icons/google-logo.svg";

import "./style.scss";

export default function SignIn() {
  return (
    <div className="container">
      <h2>Welcome to Invision</h2>
      <div>
        <form>
          <div className="user">
            <label>
              <p>Users name or Email</p>
              <input type="text" />
            </label>
          </div>
          <div className="password">
            <label>
              <p>Password</p>
              <input type="password" />
            </label>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <div>
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <p class="no-span">Or</p>
      <div>
        <div className="login-with-google">
          <button className="btn-google">
            <img src={googleIcon} alt="Logo Google" />
            Sign in with Google
          </button>
        </div>
        <div className="link-signup">
          <p>
            New <span>Invision</span>? <Link to="/register">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
