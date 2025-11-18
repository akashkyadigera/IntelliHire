import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("http://localhost:8080/api/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });

    const data = await res.json();
    const aiMessage = { sender: "ai", text: data.answer };

    setMessages((prev) => [...prev, aiMessage]);
    setInput("");
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#f5f7fb",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        padding: "15px",
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: "center",
        background: "white",
        borderBottom: "1px solid #ddd"
      }}>
        ?? IntelliHire ChatGPT UI
      </div>

      {/* Chat section */}
      <div style={{
        flex: 1,
        padding: "20px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              maxWidth: "70%",
              padding: "12px 15px",
              borderRadius: "12px",
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              background: msg.sender === "user" ? "#0084ff" : "#e5e5ea",
              color: msg.sender === "user" ? "white" : "black"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input section */}
      <div style={{
        padding: "10px",
        background: "white",
        borderTop: "1px solid #ddd",
        display: "flex",
        gap: "10px"
      }}>
        <input
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#10a37f",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
