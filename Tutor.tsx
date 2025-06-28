// src/pages/Tutor.tsx
import React, { useState } from "react";
import { askTutor } from "../api";

export default function Tutor() {
  const [topic, setTopic] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await askTutor(topic);
      setResponse(res.data.content);
    } catch (err) {
      setResponse("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">LLM-Powered Tutor</h2>
      <input
        type="text"
        placeholder="Enter a topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border rounded px-4 py-2 w-full mb-4"
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Explain
      </button>
      <div className="mt-4 whitespace-pre-line text-gray-800">{loading ? "Loading..." : response}</div>
    </div>
  );
}
