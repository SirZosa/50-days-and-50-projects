import { useState } from 'react'
import classNames from 'classnames'
import './App.css'

function App() {
const [leftActive, setLeftActive] = useState(false)
const [rightActive, setRightActive] = useState(false)
const containerClass = leftActive ? classNames('container', 'hover-left') : rightActive ? classNames('container', 'hover-right') : "container"
  return (
    <>
    <div className={containerClass}>
      <div className="split left" onMouseEnter={() => setLeftActive(true)} onMouseLeave={() => setLeftActive(false)}>
        <h1>Playstation 5</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
      <div className="split right" onMouseEnter={() => setRightActive(true)} onMouseLeave={() => setRightActive(false)}>
        <h1>XBox Series X</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </div>
    </>
  )
}

export default App
