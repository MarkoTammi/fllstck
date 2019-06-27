//MarkoT fllstack 1.8: unicafe step3

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistis = (props) => (
    <p>{props.text} {props.nrb} {props.pros}</p>
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

    // calculate total number of clicks
    const totalNumber = (good + neutral + bad)

  return (
    <div>
        <p>MarkoT fllstack 1.8: unicafe step3</p>
        <h2>Unicafe - give feedback</h2>

        <Button handleOnClick={() => increaseGood(good+1)} text='good'/>
        <Button handleOnClick={() => increaseNeutral(neutral+1)} text='neutral'/>
        <Button handleOnClick={() => increaseBad(bad+1)} text='bad'/>


        <h3>statistics</h3>
        <Statistis text="good: " nrb={good}/>
        <Statistis text="neutral: " nrb={neutral}/>
        <Statistis text="bad: " nrb={bad}/>
        <Statistis text="all: " nrb={totalNumber}/>
        <Statistis text="average: " nrb={(( good - bad ) / totalNumber )}/>      
        <Statistis text="positive: " nrb={(( good / totalNumber ) * 100 )} pros=" %"/>      

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
