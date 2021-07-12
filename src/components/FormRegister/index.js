import { Link } from "react-router-dom";

import googleIcon from "../../assets/icons/google-logo.svg";

export default function Register() {

  return (
    <div className="container">
      <h2>Getting Started</h2>
      <div>
        <form>
          <div className="user">
            <label>
              <p>Full Name</p>
              <input type="text" />
            </label>
          </div>
          <div className="email">
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
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
      <p class="no-span">Or</p>
      <div>
        <div className="login-with-google">
          <button className="btn-google">
            <img src={googleIcon} alt="Logo Google" />
            Sign up with Google
          </button>
        </div>
        <div className="link-signup">
          <p>
            By signing up, you agree to <span>Invision</span> <Link to="/register">Terms of Conditions</Link> and <Link to="/register">Privacy Policy.</Link>
          </p>
        </div>
        <div className="link-signup">
          <p>
            Already on <span>Invision</span>? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
