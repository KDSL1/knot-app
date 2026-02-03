import { useState } from "react";

const USERS = ["Kavya", "Habimunnisa", "Mounika", "AI Assistant"];

export default function ChatPage() {
  const [activeUser, setActiveUser] = useState(USERS[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({
    Alice: [],
    Bob: [],
    Charlie: [],
    "AI Assistant": [{ sender: "ai", text: "Hi 👋 I’m Knot AI." }]
  });

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages(prev => ({
      ...prev,
      [activeUser]: [...prev[activeUser], { sender: "user", text: message }]
    }));
    setMessage("");
  };

  return (
    <div className="page chat-page">
      <aside className="user-list">
        {USERS.map(u => (
          <div
            key={u}
            className={`user ${u === activeUser ? "active" : ""}`}
            onClick={() => setActiveUser(u)}
          >
            👤 {u}
          </div>
        ))}
      </aside>

      <section className="chat-section">
        <header className="chat-header">{activeUser}</header>

        <div className="chat-messages">
          {messages[activeUser].map((m, i) => (
            <div key={i} className={`msg ${m.sender}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            placeholder="Type a message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button className="primary" onClick={sendMessage}>Send</button>
        </div>
      </section>
    </div>
  );
}
