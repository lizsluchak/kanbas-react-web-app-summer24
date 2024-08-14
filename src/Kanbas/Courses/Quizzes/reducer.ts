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

    
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
  quizSlice.actions; // export all reducer functions
export default quizSlice.reducer; //export reducer
