//Marko kurssitiedot 1.3s
import React from 'react';
import ReactDOM from 'react-dom';


const Part = (props) => {
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
        <Part part ={props.part1} />
        <Part part ={props.part2} />
        <Part part ={props.part3} />
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
    const course = 'Half Stack -sovelluskehitys osa 1.3'
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }

    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }

    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }
  
    return (
        <>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} />
        <Total sum={part1.exercises + part2.exercises + part3.exercises} />
        </>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));