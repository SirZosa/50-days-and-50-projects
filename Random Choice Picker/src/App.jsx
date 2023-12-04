import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState(null)
  const [randomNum, setRandomNum] = useState(null)

  function changeInput(e){
    setInputValue(e.target.value)
  }

  const words = inputValue?.split(',').map(word => word.trim()).map((word, index) => {
    return (
      <p key={index} className={randomNum === index ? "word word-selected" : "word"}>{word}</p>
    )
  })

  function random(e){
    if(e.keyCode ===13){
      e.preventDefault()
      for(let i = 0; i< 10; i++){
        setRandomNum(Math.floor(Math.random() * words.length))
      }
    }
    else return 
  }
  

  return (
    <>
      <div className="container">
        <h2>Enter all of the choices divided by a comma (',').</h2>
        <h2>Press enter when you're done</h2>
        <textarea placeholder='Enter choices here...' className='input' type="text" value={inputValue} onChange={(e) =>changeInput(e)} onKeyDown={(e) => random(e)}/>
        {inputValue ? <div className="words-container">
        {words}
        </div> : null}
    
      </div>
    </>
  )
}

export default App
