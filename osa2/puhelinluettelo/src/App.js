// MarkoT fllstack 2.8: puhelinluettelo step3

import React, { useState } from 'react';


const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', number : '040123456' },
        { name: 'Marko Tammi', number : '040380056' }
        ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')


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

    // Display person name and number
    const personDisplay = () => persons.map(person => <p key={person.name}>{person.name} {person.number}</p> ) 

return (
    <div>
        <h5>MarkoT fllstck 2.8: puhelinluettelo step3</h5>
        <h2>Phonebook</h2>
        <form onSubmit={addPersonPhonebook}>
            <div> name: <input value={newName} onChange={handlePersonNameInput}/> </div>
            <div> number: <input value={newNumber} onChange={handlePersonNumberInput}/> </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        <h2>Numbers</h2>
        {personDisplay()}
    </div>
)

}

export default App
