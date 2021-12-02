import React from 'react'

function QuestionInput(props) {


    const background_colours = ["#F7B724", "#6239DF", "#4BA6FF", "#CD4794"]
    return (
        <>
            <div className="question-container">
                <h1 className="no-margin">{props.prompt}</h1>
            </div>

            <div className="answer-container">
                {
                    props.answers.map((a,i)=>
                        <button className="clickable-btn answer-btn" onClick={()=>props.onAnswer(i)} style={{backgroundColor:background_colours[i]}}key={i}>{a}</button>
                    )
                }
            </div>
        </>
    )
}

export default QuestionInput
