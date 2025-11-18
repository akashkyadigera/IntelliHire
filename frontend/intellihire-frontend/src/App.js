import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function askAI() {
    const res = await fetch("http://localhost:8080/api/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>IntelliHire AI Chat</h2>

      <input
        type="text"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          marginRight: "10px",
          border: "1px solid #ccc",
        }}
      />

      <button onClick={askAI} style={{ padding: "10px 20px" }}>
        Ask AI
      </button>

      <h3 style={{ marginTop: "20px" }}>Answer:</h3>
      <p>{answer}</p>
    </div>
  );
}

export default App;
