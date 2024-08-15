import axios from "axios";

const QUIZZES_API = `http://localhost:4000/api/quizzes`;

// ====================================================
// CREATE QUIZ CLIENT ROUTES
// ====================================================
export const createQuiz_cROUTE = async (quizId: string, quiz: any) => {
    const response = await axios.post(`${QUIZZES_API}`, quiz);
    return response.data;
};

// ====================================================
// READ QUIZZES CLIENT ROUTES
// ====================================================

export const findAllQuizzes_cROUTE = async () => {
    try {
        const response = await axios.get(QUIZZES_API);
        return response.data;
    } catch (error) {
        console.error("Error fetching quizzes", error);
        throw error; // Optional: re-throw the error if you want to handle it elsewhere
    }
};


export const findQuizzesByCourse_cROUTE = async (course: string) => {
    const response = await axios.get(`${QUIZZES_API}?course=${course}`);
    return response.data;
};

export const findQuizzesBySearch_cROUTE = async (search: string) => {
    const response = await axios.get(`${QUIZZES_API}?search=${search}`);
    return response.data;
};

export const findQuizById_cROUTE = async (quizId: string) => {
    const response = await axios.get(`${QUIZZES_API}/${quizId}`);
    console.log("client route =", quizId )
    return response.data;
};

// ====================================================
// UPDATE QUIZ CLIENT ROUTES
// ====================================================
export const updateQuiz_cROUTE = async (quiz: any) => {
    const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return response.data;
};

export const resetQuizQuestions_cROUTE = async () => {
    const response = await axios.put("http://localhost:4000/api/quizzes/reset-questions");
    return response.data;
  };

// ====================================================
// DELETE QUIZ CLIENT ROUTES
// ====================================================

export const deleteQuiz_cROUTE = async (quizId: string) => {
    const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
}; 

// ====================================================
// CREATE QUESTION CLIENT ROUTE
// ====================================================
export const addQuestionToQuiz_cROUTE = async (quizId: string, question: any) => {
    const response = await axios.post(`${QUIZZES_API}/${quizId}/questions`, question);
    return response.data;
}; // Added this route to handle adding questions to a specific quiz

// ====================================================
// UPDATE QUESTION CLIENT ROUTE
// ====================================================
export const updateQuestionInQuiz_cROUTE = async (quizId: string, questionId: string, question: any) => {
    const response = await axios.put(`${QUIZZES_API}/${quizId}/questions/${questionId}`, question);
    return response.data;
}; // Added this route to handle updating a specific question within a quiz

// ====================================================
// DELETE QUESTION CLIENT ROUTE
// ====================================================
export const deleteQuestionFromQuiz_cROUTE = async (quizId: string, questionId: string) => {
    const response = await axios.delete(`${QUIZZES_API}/${quizId}/questions/${questionId}`);
    return response.data;
}; // Added this route to handle deleting a specific question from a quiz
