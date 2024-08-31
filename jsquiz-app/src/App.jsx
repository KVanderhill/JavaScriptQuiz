import React, { useEffect, useReducer } from "react";
import { quizQuestions } from "./questions";
import StartScreen from "./Components/StartScreen";
import QuizStart from "./Components/QuizStart";

function reducer(state, action) {
  switch (action.type) {
    case "data-received" : 
    return {...state, questions : action.payload, status: "ready"};
    case "active": 
      return {...state, status: "active" };
  }
}

const initialstates = {
  questions : [],
  status: "loading",
  index: 0,
};

function App() {
  const [{status, questions, index }, dispatch] = useReducer(
    reducer, 
    initialstates,
  );

  useEffect( function () {
    if (quizQuestions) {
    dispatch({ type: "data-received", payload: quizQuestions })
    }
  },[])

  

  return (
  <main className="container">
    {status === "ready" && <StartScreen dispatch={dispatch} />}
    {status === "active" && (
      <QuizStart questions={questions[index]} dispatch={dispatch} />
    )}

    </main>
  );
}

export default App;