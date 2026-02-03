import { useState } from "react";
import ChatPage from "./ChatPage";
import CallPage from "./CallPage";
import StoryPage from "./StoryPage";
import AIPage from "./AIPage";
import CommunityPage from "./CommunityPage";
import SettingsPage from "./SettingsPage";
import "../styles/global.css";

export default function ChatLayout() {
  const [page, setPage] = useState("chat");

  return (
    <div className="chat-layout">

      {/* SIDEBAR */}
      <aside className="chat-sidebar">
        <h2 className="chat-logo">Knot</h2>

        <button
          className={page === "chat" ? "active" : ""}
          onClick={() => setPage("chat")}
        >
          💬 Chat
        </button>

        <button
          className={page === "call" ? "active" : ""}
          onClick={() => setPage("call")}
        >
          📞 Call
        </button>

        <button
          className={page === "story" ? "active" : ""}
          onClick={() => setPage("story")}
        >
          📸 Story
        </button>

        <button
          className={page === "ai" ? "active" : ""}
          onClick={() => setPage("ai")}
        >
          🤖 AI Chat
        </button>

        <button
          className={page === "community" ? "active" : ""}
          onClick={() => setPage("community")}
        >
          🌐 Community
        </button>

        <button
          className={page === "settings" ? "active" : ""}
          onClick={() => setPage("settings")}
        >
          ⚙️ Settings
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="chat-main">
        {page === "chat" && <ChatPage />}
        {page === "call" && <CallPage />}
        {page === "story" && <StoryPage />}
        {page === "ai" && <AIPage />}
        {page === "community" && <CommunityPage />}
        {page === "settings" && <SettingsPage />}
      </main>

    </div>
  );
}
