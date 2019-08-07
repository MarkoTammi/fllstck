// MarkoT fllstack 2.10: puhelinluettelo step5


import React, { useState } from 'react';

// Component to filter names to be displayed based on typed string
const Filter = (props) => {
    return (
        <form>
            <div>filter existing names by <input value={props.filterString} onChange={props.handleFilterStringInput}/> </div>
        </form>
    )
}

// Component to add new new to p phonebook
const AddNewName = (props) => {
    return (
        <>
            <form onSubmit={props.addPersonPhonebook}>
                <div> name: <input value={props.newName} onChange={props.handlePersonNameInput}/> </div>
                <div> number: <input value={props.newNumber} onChange={props.handlePersonNumberInput}/> </div>
                <div> <button type="submit">add</button> </div>
            </form>
        </>
    )
}

// Component to display persons (name and number) with filter criteria
const DislayNames = (props) => {
    // Display all names because filter is empty
    if (props.filterString === ''){
        return props.persons.map(person => <p key={person.name}>{person.name} {person.number}</p> )
    } else {
        // Display names icluding filter string
        const filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.filterString.toLowerCase()))
        return filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p> )
    }
}

// Main component App
const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', number : '040123456' },
        { name: 'Marko Tammi', number : '040380056' }
        ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterString, setfilterString ] = useState('')


    // Event handler when 'add' button is clicked. Check if input name is already in a phonebook.
    // If yes -> alert popup otherwise -> person name and number is added to the phonebook. 
    // Finally input fields are cleared.
    const addPersonPhonebook = (event) => {    
        event.preventDefault()    
        
        const personObject = {
          name: newName,
          number: newNumber,
        }

        if ( (persons.map(person => person.name).includes(newName)) === false ) {
          setPersons(persons.concat(personObject))
        } else {
          window.alert(`${newName} is already added to phonebook`)
        }

        setNewName('')
        setNewNumber('')
    }

    // Event handler for inputing person name.
    const handlePersonNameInput = (event) => {
        // console.log(event.target.value)    
        setNewName(event.target.value)  
    }
  
    // Event handler for inputing person number.
    const handlePersonNumberInput = (event) => {
        // console.log(event.target.value)    
        setNewNumber(event.target.value)  
    }

     // Event handler for inputing filter string  
    const handleFilterStringInput = (event) => {
        setfilterString(event.target.value)
    }


    return (
        <div>
            <h5>MarkoT fllstck 2.10: puhelinluettelo step5</h5>
            <h2>Phonebook</h2>

            <Filter
                filterString={filterString} 
                handleFilterStringInput={handleFilterStringInput}
                />

            <h3>Add new name</h3>
            <AddNewName 
                addPersonPhonebook={addPersonPhonebook} 
                newName={newName} 
                handlePersonNameInput={handlePersonNameInput}
                newNumber={newNumber} 
                handlePersonNumberInput={handlePersonNumberInput}
                />

            <h3>Numbers</h3>
            <DislayNames 
                filterString={filterString}
                persons={persons}
                />
        </div>
    )
}

export default App
