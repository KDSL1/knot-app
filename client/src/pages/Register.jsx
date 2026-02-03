import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";
import knotIcon from "../assets/icon.png";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState("");
  const [showStrength, setShowStrength] = useState(false);

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!showStrength) return;

    let s = 0;
    if (password.length > 0) s += 20;
    if (password.length >= 8) s += 30;
    if (/[A-Z]/.test(password)) s += 20;
    if (/[0-9]/.test(password)) s += 20;
    if (/[^A-Za-z0-9]/.test(password)) s += 10;

    setStrength(s);

    if (s < 50) setStrengthText("Weak Password");
    else if (s < 80) setStrengthText("Medium Password");
    else setStrengthText("Strong Password");
  }, [password, showStrength]);

  const handleRegister = () => {
    if (!email || !password || !confirm) {
      setError("All fields are required");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (!accepted) {
      setError("You must accept the Terms & Conditions");
      return;
    }

    setError("");
    navigate("/chat");
  };

  return (
    <div className="auth-layout">
      {/* LEFT */}
      <div className="auth-about">
        <img src={knotIcon} alt="Knot App Icon" className="knot-icon" />
        <h1>Knot</h1>
        <p>
          Join Knot and experience seamless chats, calls,
          communities, and AI — all in one place.
        </p>
        <p className="tagline">
          Tie your connections together.
        </p>
      </div>

      {/* RIGHT */}
      <div className="auth-wrapper">
        <div className="auth-container">
          <h2>Create account</h2>

          {error && <p className="error">{error}</p>}

          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onFocus={() => setShowStrength(true)}
            onChange={e => setPassword(e.target.value)}
          />

          {showStrength && (
            <>
              <div className="strength-meter">
                <div
                  className="strength-bar"
                  style={{
                    width: `${strength}%`,
                    background:
                      strength < 50
                        ? "#ef4444"
                        : strength < 80
                        ? "#f59e0b"
                        : "#22c55e"
                  }}
                />
              </div>
              <p className="strength-text">{strengthText}</p>
            </>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />

          <label className="terms">
            <input
              type="checkbox"
              checked={accepted}
              onChange={e => setAccepted(e.target.checked)}
            />
            <span>
              I agree to the <a href="#">Terms & Conditions</a>
            </span>
          </label>

          <button
            className="primary"
            disabled={!accepted}
            onClick={handleRegister}
          >
            Create Account
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
