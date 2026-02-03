export default function CallPage() {
  return (
    <div className="page">
      <h2>📞 Calls</h2>

      <div className="call-grid">
        <div className="video-box">Your Camera</div>
        <div className="video-box">Remote User</div>
      </div>

      <div className="call-controls">
        <button>🎤 Mute</button>
        <button>🎥 Camera</button>
        <button>🖥 Screen</button>
        <button className="danger">End Call</button>
      </div>
    </div>
  );
}
