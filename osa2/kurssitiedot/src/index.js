//MarkoT fllstck 2.1: kurssitiedot step6

import React from 'react';
import ReactDOM from 'react-dom';



const Content = (props) => {
/*     console.log(props)
    const tulos = props.parts.map(part => part.name)
    console.log(tulos) */

    return (
        <div>
        {props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </div>
    )       
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Course = (props) => {

    return (
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts}/>
        </div>
    )
}

const App = () => {
    const course = {
        name : 'Half Stack application development',
        parts : [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3,
        }
      ]
    }

    return (
        <div>
            <h5>MarkoT fllstck 2.1: kurssitiedot step6</h5>
            <Course course={course} />
        </div>
      )

  }

ReactDOM.render(<App />, document.getElementById('root'));
