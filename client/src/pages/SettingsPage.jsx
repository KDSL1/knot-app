import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Settings() {
  const navigate = useNavigate();

  // React state for theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Sync theme to body + storage
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="page">
      <h2>⚙️ Settings</h2>

      {/* Profile */}
      <input placeholder="Display Name" />
      <input type="file" />
      <button className="primary">Save Changes</button>

      <hr style={{ margin: "20px 0", opacity: 0.2 }} />

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <span>🌙 Dark</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          />
          <span className="slider"></span>
        </label>

        <span>☀️ Light</span>
      </div>

      <hr style={{ margin: "20px 0", opacity: 0.2 }} />

      {/* Sign Out */}
      <button className="danger" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
}
