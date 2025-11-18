import React, { useState } from "react";
import axios from "axios";

export default function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");

  const askAI = async () => {
    const res = await axios.post("http://localhost:8080/api/ask", { prompt });
    setReply(res.data.reply);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-green-700">?? IntelliHire AI Assistant</h1>
      <textarea className="border p-3 w-full max-w-xl rounded-md mb-3"
        rows={4} value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Ask me anything..."/>
      <button onClick={askAI} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">Ask</button>
      <div className="mt-6 p-4 bg-white shadow rounded-md w-full max-w-xl min-h-[100px]">{reply}</div>
    </div>
  );
}
