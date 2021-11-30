import React from 'react'

function HomePage(props) {
    return (
        <div>
            <button onClick={props.onContinue}>Pick a question</button>
        </div>
    )
}

export default HomePage
