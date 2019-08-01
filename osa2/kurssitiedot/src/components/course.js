// MarkoT fllstck 2.5: kurssitiedot step 10/erillinen moduli
// Course component and its subcomponents


import React from 'react'

// Calculates total amounts of courses
const Total = (props) => {
    //console.log("Total" , props)
    const totalAmount = props.parts.reduce(function(sum, part) {
        return sum +  part.exercises
    }, 0)
    
    return (
        <div>
            <p>total of {totalAmount} exercises</p>
        </div>
    )
}

// Display name of course and number of exercises
const Content = (props) => {
    return (
        <div>
        {props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </div>
    )       
}

// Display name of course header
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

// Basic structure of one course
const Course = (props) => {
    //console.log("Course")
    //console.log(props)
    return (
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts}/>
        </div>
    )
}

export default Course