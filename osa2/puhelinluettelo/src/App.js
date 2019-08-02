// MarkoT fllstack 2.7: puhelinluettelo step2

import React, { useState } from 'react';


const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Marko Tammi'}
        ]) 
    const [ newName, setNewName ] = useState('')

    // Event handler when 'add' button is clicked. Check if input name is already in a phonebook.
    // If yes -> alert popup otherwise -> name is added to the phonebook. Finally input field is
    // cleared.
    const addPersonPhonebook = (event) => {    
        event.preventDefault()    
        
        const personObject = {
          name: newName,
        }

        if ( (persons.map(person => person.name).includes(newName)) === false ) {
          setPersons(persons.concat(personObject))
        } else {
          window.alert(`${newName} is already added to phonebook`)
        }

        setNewName('')
    }

    // Event handler for inputing name.
    const handlePersonInput = (event) => {
        console.log(event.target.value)    
        setNewName(event.target.value)  
    }

    // Display person name
    const personDisplay = () => persons.map(person => <p key={person.name}>{person.name}</p> ) 

return (
    <div>
        <h5>MarkoT fllstack 2.7: puhelinluettelo step2</h5>
        <h2>Phonebook</h2>
        <form onSubmit={addPersonPhonebook}>
            <div>
                name: <input value={newName} onChange={handlePersonInput}/>
            </div>
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
