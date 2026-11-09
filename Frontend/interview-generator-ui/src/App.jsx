import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [questions, setQuestions] = useState(10);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/api/interview/generate",
        {
          topic,
          level,
          questions
        }
      );

      setResponse(res.data.response);

    } catch (error) {
      console.log(error);
      setResponse("Error generating interview questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <div className="card">

        <h1>🤖 AI Interview Generator</h1>

        <p>
          Generate professional interview questions and answers
          using Gemini AI
        </p>

        <div className="form-group">
          <label>Technology / Skill</label>

          <select
  value={topic}
  onChange={(e) => setTopic(e.target.value)}
>
  <option value="">Select Technology</option>

  <optgroup label="Programming Languages">
    <option value="Java">Java</option>
    <option value="Python">Python</option>
    <option value="JavaScript">JavaScript</option>
    <option value="C++">C++</option>
    <option value="C#">C#</option>
    <option value="Go">Go</option>
  </optgroup>

  <optgroup label="Backend">
    <option value="Spring Boot">Spring Boot</option>
    <option value="Node.js">Node.js</option>
    <option value="Django">Django</option>
    <option value="ASP.NET">ASP.NET</option>
  </optgroup>

  <optgroup label="Frontend">
    <option value="React">React</option>
    <option value="Angular">Angular</option>
    <option value="Vue.js">Vue.js</option>
  </optgroup>

  <optgroup label="Database">
    <option value="SQL">SQL</option>
    <option value="MySQL">MySQL</option>
    <option value="PostgreSQL">PostgreSQL</option>
    <option value="MongoDB">MongoDB</option>
  </optgroup>

  <optgroup label="Cloud">
    <option value="AWS">AWS</option>
    <option value="Azure">Azure</option>
    <option value="Google Cloud">Google Cloud</option>
  </optgroup>

  <optgroup label="Interview Preparation">
    <option value="DSA">Data Structures & Algorithms</option>
    <option value="System Design">System Design</option>
    <option value="OOPs">OOPs</option>
  </optgroup>
</select>
        </div>

        <div className="form-group">
          <label>Experience Level</label>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Questions</label>

          <input
            type="number"
            value={questions}
            min="1"
            max="50"
            onChange={(e) => setQuestions(e.target.value)}
          />
        </div>

        <button
          className="generate-btn"
          onClick={generateQuestions}
        >
          {loading ? "Generating..." : "🚀 Generate Questions"}
        </button>

      </div>

      {response && (
        <div className="result-card">
          <h2>Generated Questions</h2>
          <pre>{response}</pre>
        </div>
      )}

    </div>
  );
}

export default App;