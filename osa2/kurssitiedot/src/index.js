// MarkoT fllstck 2.5: kurssitiedot step 10/erillinen moduli

import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/course';


// Course component moved to own file ./components/course.js


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
            <h5>MarkoT fllstck 2.5: kurssitiedot step 10/erillinen moduli</h5>
            {courses.map((course, i) => <Course key={i} course={course} />)}
        </div>
      )

  }

ReactDOM.render(<App />, document.getElementById('root'));
