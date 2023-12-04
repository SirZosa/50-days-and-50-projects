import { useState } from 'react'
import './App.css'
import applause from './sounds/applause.mp3'
import boo from './sounds/boo.mp3'
import gasp from './sounds/gasp.mp3'
import tada from './sounds/tada.mp3'
import victory from './sounds/victory.mp3'
import wrong from './sounds/wrong.mp3'

function App() {
  const sounds = [{name: 'applause', src: applause},{name:'boo', src: boo}, {name:'gasp', src:gasp}, {name:'tada', src:tada}, {name:'victory', src: victory}, {name:'wrong', src: wrong}]
  const [currentAudio, setCurrentAudio] = useState(null)


  function playMusic(sound){
    if(currentAudio){
      currentAudio.pause()
    }
    const audio = new Audio(sound)
    setCurrentAudio(audio)
    audio.play()
  }

  const buttons = sounds.map((sound, index) => {
    return <button key={sound.name} className="btn" onClick={() => playMusic(sound.src)}>{sound.name}</button>
  })

  return (
    <div className='container'>
      {buttons}
    </div>
  )
}

export default App
