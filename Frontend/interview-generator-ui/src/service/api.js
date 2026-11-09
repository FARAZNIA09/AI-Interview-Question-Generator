import axios from "axios";

const API_URL = "http://localhost:8080/api/interview";

export const generateInterviewQuestions = async (data) => {
    return axios.post(`${API_URL}/generate`, data);
};