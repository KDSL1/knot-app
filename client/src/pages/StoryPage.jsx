const USERS = ["You", "Alice", "Bob", "Charlie"];

export default function StoryPage() {
  return (
    <div className="page">
      <h2>📸 Stories</h2>

      <div className="story-row">
        {USERS.map(u => (
          <div key={u} className="story">
            <div className="story-avatar">{u[0]}</div>
            <span>{u}</span>
          </div>
        ))}
      </div>

      <button className="primary">Upload Story</button>
    </div>
  );
}
