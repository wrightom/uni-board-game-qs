import React from 'react'

function QuestionInput(props) {
    

    return (
        <div>
            <h1>{props.prompt}</h1>
            <ol>
                {
                    props.answers.map((a,i)=>
                        <li key={i}><button onClick={()=>props.onAnswer(i)}>{a}</button></li>
                    )
                }
            </ol>
        </div>
    )
}

export default QuestionInput
