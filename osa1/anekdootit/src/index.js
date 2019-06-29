// Fullstack MarkoT 1.12*: anekdootit step1

import React, { useState } from 'react'
import ReactDOM from 'react-dom'


//Create Anecdotes element to display
const DisplayAnecdotes = (props) => {
    return (
        <div>
            {props.anecdotes[props.number]}
        </div>
    )
}

// Component to create all buttons and eventlistener
const Button = (props) => {
    //console.log('Button')
    const { handleOnClick} = props
    return ( 
      <button onClick={handleOnClick}>next anecdote</button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(3)

    //Set variable to select anecdote
    const setToValue = () => {
        //console.log('setToValue')
        let randomnumber
        do {
            randomnumber = Math.round(Math.random() * 10)
        } while (randomnumber > anecdotes.length - 1)
        //console.log(randomnumber)
        setSelected(randomnumber)
    }  

    return (
        <div>
            <h5>MarkoT fllstck 1.12*: anekdootit step1</h5>
            
            <DisplayAnecdotes anecdotes={anecdotes} number={selected}/>
            <Button handleOnClick={() => setToValue()}/>

        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
