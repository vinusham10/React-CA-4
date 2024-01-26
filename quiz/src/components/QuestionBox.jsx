import React, { useState, useEffect } from 'react';
import questions from '../questions'
import '../components/QuestionBox.css';
import Result from './Result';

export default function QuestionBox() {
  const [questionState, setQuestionState] = useState(0);
  const [isDisplayed, setIsDisplayed] = useState(false); 
  const[score, setScore] = useState(0); 

  const handleToggle = () => {
    setIsDisplayed((state) => !state);
  };

  const moveNextQuestion = (isCorrect) => { 
    if (isCorrect) { 
      setScore(score+1)
    } 
    setQuestionState(questionState+1);
  };

  
  useEffect(() => {
    const body = document.querySelector('body'); 
    if (isDisplayed) {
      body.style.backgroundColor = 'black' ;
      body.style.color = 'white'
    } else {
      body.style.backgroundColor = 'white' ;
      body.style.color = 'black'
    }
  }, [isDisplayed]);

 
  const reset = () => {
      setScore(0)
        setQuestionState(0)
  }
  const toggleHighLight = () =>{ 
      document.getElementsByClassName('highOne')[0].classList.add('highLighter')
  }
  const untoggleHighLight = () =>{
    document.getElementsByClassName('highOne')[0].classList.remove('highLighter')
}

  return (
    <div id="main-div">
      <div className="nav-bar">
        <span id='logo'>QuizQuest</span>
        <button className="dark-mode-btn"onClick={handleToggle}>
         {isDisplayed ? 'Light' : 'Dark'} mode
        </button>
      </div>
      {questionState < questions.length ? (
        <div className="question-modal">
          <div className="Question-container">
            <div id="questions">
              <p>Question: {questionState+1} out of 5</p>
              <h3 className='highOne'>{questions[questionState].text}</h3>
            </div>
            <div id="options-div">
              {questions[questionState].options.map((el, index) => ( 
                <button key={index} onClick={() => moveNextQuestion(el.isCorrect)}>
                  {el.text}
                </button>
              ))}
            </div>
            <div className="highlight-btn-div">
              <button onClick={toggleHighLight} >highlight</button> 
              <button onClick={untoggleHighLight} id='highOne'>Remove Highlight</button> 
            </div>
          </div>
        </div>
      ) : (
        <Result score={score} resetOption={reset}/>
      )}
    </div>
  );
}