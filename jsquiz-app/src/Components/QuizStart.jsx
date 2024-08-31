import React from "react";

function QuizStart({ questions }) {
    
    return (
    <div className="quiz">
        <div className="quiz_header">
            <h2>{questions.question}</h2>
        </div>
        <div className="quiz_body">
            {questions.options.map((option)=>(
                <li key={option}>{option}</li>
            ))}
            
        </div>
        <div className="quiz_footer">
            <p>Number of Questions 0 / 15</p>
            <button className="btn">Next</button>
        </div>
    </div>
    );
}
export default QuizStart;
