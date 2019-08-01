// MarkoT fllstck 2.4: kurssitiedot step 9

import React from 'react';
import ReactDOM from 'react-dom';

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

// Main Component
const App = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          parts: [
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
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        },

        {
            name: 'Half Stack application development-2',
            parts: [
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
                name: 'Marko',
                exercises: 1,
                id: 4
              }
            ]
          },

        {
          name: 'Node.js',
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            },
            {
              name: 'Marko-testi',
              exercises: 4,
              id: 3
            }
          ]
        }
      ]
    //console.log(courses)
    return (
        <div>
            <h5>MarkoT fllstck 2.4: kurssitiedot step 9</h5>
            {courses.map((course, i) => <Course key={i} course={course} />)}
        </div>
      )

  }

ReactDOM.render(<App />, document.getElementById('root'));
