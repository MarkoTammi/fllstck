// Fullstack MarkoT 1.14*: anekdootit step3

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

const DisplaylNbrVotes = (props) => {
    //console.log('DisplayNbrVotes')
    return (
        <p>has {props.nbr} votes</p>
    )
}

const DisplayAnecdoteWithMostVotes = () => {
    if (howManyVotes > 0) {
        return (
            <div>
                <h4>Anecdote with most votes</h4>
                <DisplayAnecdotes anecdotes={anecdotes} number={anecdoteWithMostVotes}/>
                <DisplaylNbrVotes nbr={howManyVotes}/>
            </div>
        )
    }
    return null
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(0)

    //Set variable to select anecdote
    const setToValue = () => {
        //console.log('setToValue')
        let randomnumber
        do {
            randomnumber = Math.round(Math.random() * 10)
        } while (randomnumber > anecdotes.length - 1)
        //console.log(randomnumber)
        setSelected(randomnumber)
        setVote(votesArray[randomnumber])

        whichAnecdoteMostVotes()
    }  

    //Calculates votes when vote-button is pressed
    const countVotes = () => {
        let nbrVotes = votesArray[selected]
        votesArray[selected] = nbrVotes+1
        //console.log(votesArray)
        setVote(votesArray[selected])

        whichAnecdoteMostVotes()
    }

    //Which anecdote has the most votes
    const whichAnecdoteMostVotes = () => {
        let i = 0
        while (i < anecdotes.length - 1){
            if (votesArray[i] > howManyVotes) {
                howManyVotes = votesArray[i]
                anecdoteWithMostVotes = i
            }
            i++
        }
    }

    return (
        <div>
            <h5>MarkoT fllstck 1.14*: anekdootit step3</h5>

            <h3>Anecdote of the day</h3>
            <DisplayAnecdotes anecdotes={anecdotes} number={selected}/>

            <DisplaylNbrVotes nbr={vote}/>
            <Button handleOnClick={() => countVotes()}text='vote'/>
            <Button handleOnClick={() => setToValue()} text='next anecdote'/>

            <DisplayAnecdoteWithMostVotes/>

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

// Variable - Number of anecdote with most votes
let anecdoteWithMostVotes
// Variable how many votes
let howManyVotes = 0

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
