import '../styles/global.css';
import knotIcon from '../assets/icon.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-layout">

      <div className="auth-about">
        <img src={knotIcon} alt="Knot App Icon" className="knot-icon" />
        <h1>Knot</h1>
        <p>
          Knot connects chats, calls, communities, and AI into
          one seamless experience.
        </p>
        <p className="tagline">
          Tie all your connections together.
        </p>
      </div>

      <div className="auth-wrapper">
        <div className="auth-container">
          <h2>Welcome back</h2>

          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <p className="auth-legal">
            <label className="terms">
              <input type="checkbox" />
                  <span>Remember me</span>
              </label>

            By continuing, you agree to our
            <a href="#"> Terms</a> & <a href="#">Privacy Policy</a>
          </p>
          <button onClick={() => navigate('/chat')}>
            Login
          </button>

          <p className="auth-switch">
            Not registered? <Link to="/register">Create account</Link>
          </p>

         
        </div>
      </div>

    </div>
  );
}
