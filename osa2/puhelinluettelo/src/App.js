// MarkoT fllstack 2.9*: puhelinluettelo step4

import React, { useState } from 'react';


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


    // Display persons (name and number) with filter criteria
    const personDisplay = () => {
        // Display all names because filter is empty
        if (filterString === ''){
          return persons.map(person => <p key={person.name}>{person.name} {person.number}</p> )
        } else {
        // Display names icluding filter string
          const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterString.toLowerCase()))
          return filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p> )
        }
    }

return (
    <div>
        <h5>MarkoT fllstck 2.9*: puhelinluettelo step4</h5>
        <h2>Phonebook</h2>

        <form>
            <div> filter existing names by <input value={filterString} onChange={handleFilterStringInput}/> </div>
        </form>

        <h3>Add new name</h3>
        <form onSubmit={addPersonPhonebook}>
            <div> name: <input value={newName} onChange={handlePersonNameInput}/> </div>
            <div> number: <input value={newNumber} onChange={handlePersonNumberInput}/> </div>
            <div> <button type="submit">add</button> </div>
        </form>

        <h3>Numbers</h3>
        {personDisplay()}
    </div>
)

}

export default App
