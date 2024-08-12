import axios from "axios";

// const LOCAL_SERVER = process.env.REACT_APP_LOCAL_SERVER; 
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// // const USERS_API = `https://kanbas-server-a6.onrender.com/api/users`;
const QUIZZES_API = `http://localhost:4000/api/quizzes`;


// ====================================================
// CREATE QUIZ CLIENT ROUTES
// ====================================================
export const createQuiz_cROUTE = async (quiz: any) => {
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
    const response = await
        axios.get(`${QUIZZES_API}?course=${course}`);
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


  // ====================================================
  // DELETE QUIZ CLIENT ROUTES
  // ====================================================

export const deleteQuiz_cROUTE = async (quizId: string) => {
    const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
    return response.data;
};