import { useState } from "react";

export default function AIPage() {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);

  const askAI = () => {
    if (!input.trim()) return;
    setResponses(prev => [...prev, input]);
    setInput("");
  };

  return (
    <div className="page gradient">
      <h2>🤖 Knot AI</h2>

      <div className="ai-box">
        {responses.map((r, i) => (
          <div key={i} className="ai-msg">{r}</div>
        ))}
      </div>

      <input
        placeholder="Ask Knot AI..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && askAI()}
      />
      <button className="primary" onClick={askAI}>Ask</button>
    </div>
  );
}
