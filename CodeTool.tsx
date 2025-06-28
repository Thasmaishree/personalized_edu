import React, { useState } from "react";
import axios from "axios";

export default function CodeTool() {
  const [instruction, setInstruction] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/code", { instruction });
      setOutput(res.data.content);
    } catch (err) {
      setOutput("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Code Generator</h2>
      <textarea
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        placeholder="Enter an instruction (e.g., write a Python function to reverse a string)"
        className="border rounded w-full h-40 p-2 mb-4"
      />
      <button
        onClick={handleRun}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Generate Code
      </button>
      <div className="mt-4 whitespace-pre-wrap text-gray-800">
        {loading ? "Loading..." : output}
      </div>
    </div>
  );
}
