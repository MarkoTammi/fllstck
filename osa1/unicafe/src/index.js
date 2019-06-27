//MarkoT fllstack 1.6: unicafe step1

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayStatistis = (props) => (
    <p>{props.text} {props.nrb}</p>
)

const Button = (props) => {
    // console.log(props)
    const { handleOnClick, text } = props
    return ( 
      <button onClick={handleOnClick}>{text}</button>
    )
}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const increaseGood = (value) => {
        setGood(value)
    }
    const increaseNeutral = (value) => setNeutral(value)
    const increaseBad = (value) => setBad(value)

  return (
    <div>
        <p>MarkoT fllstack 1.6: unicafe step1</p>
        <h2>Unicafe - give feedback</h2>

        <Button handleOnClick={() => increaseGood(good+1)} text='good'/>
        <Button handleOnClick={() => increaseNeutral(neutral+1)} text='neutral'/>
        <Button handleOnClick={() => increaseBad(bad+1)} text='bad'/>


        <h3>statistics</h3>
        <DisplayStatistis text="good: " nrb={good}/>
        <DisplayStatistis text="neutral: " nrb={neutral}/>
        <DisplayStatistis text="bad: " nrb={bad}/>        
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
