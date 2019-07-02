// Fullstack MarkoT 1.13*: anekdootit step2

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
    const { handleOnClick, text} = props
    return ( 
      <button onClick={handleOnClick}>{text}</button>
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

    //Calculates votes when vote-button is pressed
    const countVotes = () => {
        let nbrVotes = votesArray[selected]
        votesArray[selected] = nbrVotes+1
        console.log(votesArray)
        return null
    }

    return (
        <div>
            <h5>MarkoT fllstck 1.13*: anekdootit step2</h5>
            
            <DisplayAnecdotes anecdotes={anecdotes} number={selected}/>
            <Button handleOnClick={() => countVotes()}text='vote'/>
            <Button handleOnClick={() => setToValue()} text='next anecdote'/>

        </div>
    )
}

const anecdotes = [
  '0 - If it hurts, do it more often',
  '1 - Adding manpower to a late software project makes it later!',
  '2 - The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  '3 - Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  '4 - Premature optimization is the root of all evil.',
  '5 - Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

//create enmpty array for counting votes
let votesArray = []
let i = 0
while (i < anecdotes.length) {
    votesArray.push(0)
    i++
}
    

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
