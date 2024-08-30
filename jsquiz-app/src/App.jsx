import React, { useEffect, useReducer } from "react";
import { quizQuestions } from "./questions";

function reducer(state, action ){
  switch(action.type){
    case "data-recieved" : 
    return {...state, questions : action.payload, status: "ready"};
  }
}

const initialstates = {
  questions : [],
  status: "loading"
}

function App() {
  const [{status, questions}, dispatch] = useReducer(reducer, initialstates);
  useEffect( function() {
    if (quizQuestions) {
    dispatch({type: "data-recieved", payload: quizQuestions})
    }
  },[])

  return (
  <main className="container">
    <div className="quiz-wrapper">
      <h2>Welcome to</h2>
      <h3>Academia Code Trials!</h3>
      <p>Number of Questions : 0</p>
      <p>Total Points : 0</p>
      <button className="btn">Let's Do This!</button>


 </div>
  </main>
 
  );
}

export default App;