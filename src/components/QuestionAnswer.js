import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";

function QuestionAnswer(props) {
    

    const getButtonClass = (i) => (
        i === props.correctI
        ? "clickable-btn answer-btn correct"
        : i === props.inputI
        ? "clickable-btn answer-btn incorrect"
        : "clickable-btn answer-btn other-answer"
    );

    return (
        <MathJaxContext>
            <div className="question-container">
                <h1 className="no-margin"><MathJax>{props.prompt}</MathJax></h1>
                <p className="no-margin">{props.correctI === props.inputI? "Correct!! \u2705\u2705\u2705 Great job!":"Unlucky! \u{1F480}\u{1F614}"}</p>
                <p className="no-margin">Press any button to continue</p>
            </div>

            <div className="answer-container">
                {
                    props.answers.map((a,i)=>
                        <button className={getButtonClass(i)} key={i} onClick={props.onContinue}><MathJax>{a}</MathJax></button>
                    )
                }
            </div>
        </MathJaxContext>
    )
}

export default QuestionAnswer
