import React from 'react'

function HomePage(props) {
    return (
        <div>
            <h1>Maths Degree - The Game That Counts</h1>
            <button onClick={props.onContinue} className="start-btn clickable-btn">Pick a question</button>
        </div>
    )
}

export default HomePage
