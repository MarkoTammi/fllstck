//Marko kurssitiedot 1.4

import React from 'react';
import ReactDOM from 'react-dom';


const Part = (props) => {
    //console.log(props)
    return (
        <>
        <p>{props.part.name} {props.part.exercises} </p>
        </>        
    )
}

const Header = (props) => {
    return (
        <>
        <h1>{props.course}</h1>
        </>
    )
}

const Content = (props) => {
    //console.log(props)
    return (
        <>
        <Part part ={props.parts[0]} />
        <Part part ={props.parts[1]} />
        <Part part ={props.parts[2]} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
        <p>yhteensä {props.sum} tehtävää</p>
        </>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys osa 1.4'
    const parts = [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
  
    return (
        <>
        <Header course={course} />
        <Content parts={parts} />
        <Total sum={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));