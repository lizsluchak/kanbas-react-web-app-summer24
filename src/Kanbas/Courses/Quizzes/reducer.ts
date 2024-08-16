import { createSlice } from "@reduxjs/toolkit"; //import create slice to access reduxjs


const initialState = {
  quizzes: [],
  
};


const quizSlice = createSlice({
  name: "quizzes", //name the slice
  initialState, // pass in initial state we created of modules from db
  reducers: { //declare reducer functions
    
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },

    

    addQuiz: (state, { payload: quiz }) => { 

      const newQuiz: any = {
        _id: new Date().getTime().toString(),
        qid: quiz.qid,
        name: quiz.title,
        course: quiz.course,
        description: quiz.description, 
        points: quiz.points, 
        assignTo: quiz.assignTo, 
        assignmentGroup: quiz.assignmentGroup, 
        quizType: quiz.quizType,
        shuffleAnwsers: quiz.shuffleAnwsers, 
        timeLimit: quiz.timeLimit,
        multipleAttempts: quiz.multipleAttempts,
        showCorrectAnwsers: quiz.showCorrectAnwsers, 
        accessCode: quiz.accessCode,
        oneQuestionAtATime: quiz.oneQuestionAtATime, 
        webcamRequired: quiz.webcamRequired, 
        lockQuestionsAfterAnswering: quiz.lockQuestionsAfterAnswering, 
        displayGradeAs: quiz.displayGradeAs,
        dueDate: quiz.dueDate,
        availableDate: quiz.availableDate, 
        availableTime: quiz.availableTime, 
        dueTime: quiz.dueTime, 
        untilDate: quiz.untilDate, 
        published: quiz.published,
        data: quiz.data,
      };

      // updates the modules array in state: current module state is spread
      // to new array, new module added at end
      // 'as any':  is a TypeScript type assertion, which tells the TypeScript 
      // compiler to treat the array as of type any
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },

    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, editing: true } : q
      ) as any;
    },
    // New reducer to add a question to a quiz
    addQuestionToQuiz: (state, { payload }) => {
      const { quizId, question } = payload;
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, questions: [...q.questions, question] } : q
      ) as any; // Added to handle adding a question to the quiz
    },

    // New reducer to update a question within a quiz
    updateQuestionInQuiz: (state, { payload }) => {
      const { quizId, questionId, updatedQuestion } = payload;
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId
          ? {
              ...q,
              questions: q.questions.map((question: any) =>
                question.id === questionId ? updatedQuestion : question
              ),
            }
          : q
      ) as any; // Added to handle updating a question in the quiz
    },

    // New reducer to delete a question from a quiz
    deleteQuestionFromQuiz: (state, { payload }) => {
      const { quizId, questionId } = payload;
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId
          ? {
              ...q,
              questions: q.questions.filter(
                (question: any) => question.id !== questionId
              ),
            }
          : q
      ) as any; // Added to handle deleting a question from the quiz
    },

    
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes, deleteQuestionFromQuiz, addQuestionToQuiz, updateQuestionInQuiz } =
  quizSlice.actions; // export all reducer functions
export default quizSlice.reducer; //export reducer
