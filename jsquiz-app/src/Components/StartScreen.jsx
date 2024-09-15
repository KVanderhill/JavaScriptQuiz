import React from "react";

function StartScreen({dispatch, totalQuestions, maxPossiblePoints }) {
    return (
    <div className="quiz_wrapper">
      <h2>Welcome to</h2>
      <h3>Academia Code Trials!</h3>
      <p>Number of Questions : {totalQuestions}</p>
      <p>Total Points : {maxPossiblePoints}</p>
      <button className="btn" onClick={()=> dispatch({type: "active"})}>Let's Do This!</button>
</div>
    );
}
export default StartScreen;