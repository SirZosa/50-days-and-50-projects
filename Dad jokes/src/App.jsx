import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState(null)

  useEffect(() =>{
    getJoke()
  }, [])

  function getJoke(){
    const config = {
      headers: {
        Accept: 'application/json',
      }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then(response => response.json())
    .then(data => setJoke(data.joke))
  }

  return (
    <>
     <div className="container">
        <h3>Don't laugh challenge</h3>
        <p className='joke'>{joke}</p>
        <button className="btn" onClick={()=> getJoke()}>Get Another Joke</button>
     </div>
    </>
  )
}

export default App
