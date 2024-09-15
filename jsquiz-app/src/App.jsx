import React, { useEffect, useReducer } from "react";
import { quizQuestions } from "./questions";
import StartScreen from "./Components/StartScreen";
import QuizStart from "./Components/QuizStart";
import FinishScreen from "./Components/FinishScreen";


function reducer(state, action) {
  switch (action.type) {
    case "data-received" : 
    return { ...state, questions: action.payload, status: "ready" };
    case "active": 
      return { ...state, status: "active" };
      case "newAnswer": 
      
      const question = state.questions.at(state.index);

      return { ...state, answer: action.payload, points: action.payload === question.correctOptions
        ? state.points + question.points : state.points};
        
    case "nextQuestions" : 
    return { ...state, index: state.index + 1, answer: null };
    case "finishScreen" : 
    return { ...state, status: "finish" };
    case "restart" : 
    return { ...state, status: "ready", index: 0, answer: null, points: 0 };
    }

}

const initialstates = {
  questions : [],
  status: "loading",
  index: 0,
  answer: null, 
  points: 0
};

function App() {
  const [{status, questions, index, answer, points }, dispatch] = useReducer(
    reducer, 
    initialstates,
  );

  useEffect(function () {
    if (quizQuestions) {
    dispatch({ type: "data-received", payload: quizQuestions })
    }
  },[])

  const totalQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev,cur)=> prev+cur.points,
0,
 );

  return (
  <main className="container">
    {status === "ready" && (
    <StartScreen 
    dispatch={dispatch}
    totalQuestions={totalQuestions} 
    maxPossiblePoints={maxPossiblePoints}/>
    )}
    {status === "active" && (
      <QuizStart 
      questions={questions[index]} 
      dispatch={dispatch} 
      totalQuestions={totalQuestions} 
      index={index + 1}
      answer={answer}/>
    )}
  {status === "finish" && (
  <FinishScreen 
  dispatch={dispatch} 
  points={points} 
  maxPossiblePoints={maxPossiblePoints}/>
  )}
    </main>
  );
}

export default App;