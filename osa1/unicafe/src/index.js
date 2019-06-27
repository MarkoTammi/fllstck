//MarkoT fllstack 1.9: unicafe step4

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Component to create statistics
const Statistic = (props) => {
  if (props.allNbr === 0) {
    return (
      <p>No feedback has been given sofar. The app is used by pressing the buttons.</p> 
    )
  }
  return (
    <div>
      <p>{props.goodTxt} {props.goodNbr}</p>
      <p>{props.neutralTxt} {props.neutralNbr}</p>
      <p>{props.badTxt} {props.badNbr}</p>
      <p>{props.allTxt} {props.allNbr}</p>
      <p>{props.averageTxt} {props.averageNbr}</p>
      <p>{props.positiveTxt} {props.positiveNbr} {props.positivePros}</p>
    </div>
    )
}

// Component to create all buttons and eventlistener
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
        <p>MarkoT fllstack 1.9: unicafe step4</p>

        <h2>Unicafe - give feedback</h2>
        <Button handleOnClick={() => increaseGood(good+1)} text='good'/>
        <Button handleOnClick={() => increaseNeutral(neutral+1)} text='neutral'/>
        <Button handleOnClick={() => increaseBad(bad+1)} text='bad'/>


        <h4>Statistics</h4>
        <Statistic
          goodTxt="good: " goodNbr={good}
          neutralTxt="neutral: " neutralNbr={neutral}
          badTxt="bad: " badNbr={bad}
          allTxt="all: " allNbr={totalNumber}
          averageTxt="average: " averageNbr={(( good - bad ) / totalNumber )}
          positiveTxt="positive: " positiveNbr={(( good / totalNumber ) * 100 )} positivePros=" %"
          />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
