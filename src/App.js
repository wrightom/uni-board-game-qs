
import './App.css';
import { useState, useEffect, useRef } from "react";

// import questions
import questions from './questions.json';

import QuestionInput from './components/QuestionInput';
import QuestionAnswer from './components/QuestionAnswer';
import HomePage from './components/HomePage';

function App() {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);


  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [shuffledAs, setShuffledAs] = useState([]);
  
  const [inputAnswer, setInputAnswer] = useState(0);

  function randomIndexExcept(arrayLength, excludeIndex){
    let sample = Math.floor(Math.random() * (arrayLength-1));

    if (sample >= excludeIndex){
      return sample + 1;
    }
    return sample;
  }

  function generateQuestion(){
    setCurrentSlide(1);

    // choose new question
    let currentQuestionIndex = randomIndexExcept(questions.length, currentQuestion);
    setCurrentQuestion(currentQuestionIndex);

    // set correct answer 
    let answersList = questions[currentQuestionIndex].answers;
    let correctAnswer = answersList[0];

    let shuffledAnswerList = shuffle(answersList);

    setShuffledAs(shuffledAnswerList);
    setCorrectAnswerIndex(shuffledAnswerList.indexOf(correctAnswer));

  }

  function shuffle(inputArray) {
    let array = [...inputArray];
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function selectAnswer(chosenAnswerIndex){
    setInputAnswer(chosenAnswerIndex);
    setCurrentSlide(2);

  }

  function resetQuestion(){
    setCurrentSlide(0);
  }




  return (
    <div className="App">
        {
          currentSlide === 0
          ? <HomePage onContinue={generateQuestion}/>
          : currentSlide === 1
          ? <QuestionInput prompt={questions[currentQuestion].prompt} answers={shuffledAs} onAnswer={selectAnswer}/>
          : <QuestionAnswer prompt={questions[currentQuestion].prompt} answers={shuffledAs} correctI={correctAnswerIndex} inputI={inputAnswer} onContinue={resetQuestion}/>
        }
    </div>
  );
}

export default App;
