import { useState } from "react";
import { generateInterviewQuestions } from "../service/api";

function InterviewForm() {

    const [topic, setTopic] = useState("");
    const [level, setLevel] = useState("Beginner");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {

        setLoading(true);

        try {

            const result = await generateInterviewQuestions({
                topic,
                level
            });

            setResponse(result.data.response);

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }

        setLoading(false);
    };

    return (
        <div className="container">

            <h1>Interview Question Generator</h1>

            <input
                type="text"
                placeholder="Enter Skill"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />

            <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>

            <button onClick={handleSubmit}>
                {loading ? "Generating..." : "Generate"}
            </button>

            <div className="result">
                <pre>{response}</pre>
            </div>

        </div>
    );
}

export default InterviewForm;