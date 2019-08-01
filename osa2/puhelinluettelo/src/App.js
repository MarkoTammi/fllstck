// MarkoT fllstack 2.6: puhelinluettelo step1

import React, { useState } from 'react';


const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Marko Tammi'}
        ]) 
    const [ newName, setNewName ] = useState('')

    const addPerson = (event) => {    
        event.preventDefault()    
        console.log('button clicked',event.target)
        
        const personObject = {
          name: newName,
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }

    const handlePersonAdding = (event) => {
        console.log(event.target.value)    
        setNewName(event.target.value)  
    }

    // Display person name
    const personDisplay = () => persons.map(person => <p key={person.name}>{person.name}</p> ) 

return (
    <div>
        <h5>MarkoT fllstack 2.6: puhelinluettelo step1</h5>
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handlePersonAdding}/>
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
