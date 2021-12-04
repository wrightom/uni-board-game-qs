import React from 'react'
import { MathJax, MathJaxContext } from "better-react-mathjax";

function QuestionInput(props) {


    const background_colours = ["#F7B724", "#6239DF", "#4BA6FF", "#CD4794"]
    

    const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [["$", "$"]],
          displayMath: [["$$", "$$"]]
        }
      };

    return (
        <MathJaxContext config={config} version={3}>
        
            <div className="question-container">
                
                <h1 className="no-margin"><MathJax inline>{props.prompt}</MathJax></h1>
                 
            </div>

            <div className="answer-container">
                {
                    props.answers.map((a,i)=>
                        <button className="clickable-btn answer-btn" onClick={()=>props.onAnswer(i)} style={{backgroundColor:background_colours[i]}}key={i}><MathJax>{a}</MathJax></button>
                    )
                }
            </div>
        </MathJaxContext>
    )
}

export default QuestionInput
