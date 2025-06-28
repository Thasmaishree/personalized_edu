// src/pages/MockInterview.tsx
import React, { useState } from "react";
import { runMockInterview } from "../api";

export default function MockInterview() {
  const [domain, setDomain] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const res = await runMockInterview(domain);
      setQuestions(res.data.content);
    } catch (err) {
      setQuestions("Error fetching questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Mock Interview</h2>
      <input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter your domain (e.g., Web Dev, ML, DSA)"
        className="border rounded px-4 py-2 w-full mb-4"
      />
      <button onClick={fetchQuestions} className="bg-purple-600 text-white px-4 py-2 rounded">
        Get Questions
      </button>
      <div className="mt-4 whitespace-pre-line text-gray-800">{loading ? "Loading..." : questions}</div>
    </div>
  );
}
