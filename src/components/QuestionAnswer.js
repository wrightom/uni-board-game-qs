import React from 'react'

function QuestionAnswer(props) {
    return (
        <div>
            <h1>{props.prompt}</h1>
            <ol>
                {
                    props.answers.map((a,i)=>
                        <li key={i}><button className={i===props.correctI?"correct":"incorrect"}>{a}</button></li>
                    )
                }
            </ol>
            <button onClick={props.onContinue}>Continue</button>
        </div>
    )
}

export default QuestionAnswer
