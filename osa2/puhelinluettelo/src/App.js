// MarkoT 2.17: puhelinluettelo step9


import React, { useState, useEffect } from 'react';
import personServices from './services/persons'
import './index.css'


// Main component App
const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterString, setFilterString ] = useState('')
    const [ message, setMessage ] = useState('')


    // To get name and number data for phonebook from local db.json file
    useEffect(() => {
        personServices
            .getAllPersons()
            .then(response => {
                //console.log('getAllPerson: ', response)
                //console.log(response.data[4].name)
                //setPersons(response.data)
                setPersons(response.data.filter(n => n.name !== undefined))
            })
      }, [])

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
            // Name don't exist -> save name and number to local db.json
            personServices
                .createPerson(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })
        } else {
            // Name already exist in phonebook
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
        setFilterString(event.target.value)
    }

    return (
        <div>
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
                setPersons={setPersons}
                personServices={personServices}
                />

            <Footer />
        </div>
    )
} 
//
// end - of - App
//

// Component to display notification 5sec.
/* const Notification = (props) => {
    return (
        setTimeout(() => {setMessage(null)}, 5000)
    )
} */

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
                <div> <button type="submit">Add</button> </div>
            </form>
        </>
    )
}

// Component to display persons (name and number) with filter criteria
const DislayNames = (props) => {
    // Display all names because filter is empty
    if (props.filterString === ''){
        return (
            <NameTable 
                namesToDisplay={props.persons}
                setPersons={props.setPersons}
                personServices={props.personServices}
                />
        )     
    } else {
        // Display only names including filter string
        const filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.filterString.toLowerCase()))
        return (
            <NameTable 
                namesToDisplay={filteredPersons}
                setPersons={props.setPersons}
                personServices={props.personServices}
                />
        )
    }
}

// Component to display phonebook table
const NameTable = (props) => {
    //console.log('NameTable props : ', props)


    // Event handler for deleting name
    const handleDeletePersonName = (props) => {
        console.log('delete clicked: id = ', props)
        personServices
            .deletePerson(props)
            //.getAllPersons()
            .then(() => getAllPersons())
            .then(response => {
                console.log('getAllPerson after delete: ', response)})            
            .then(response => {
                    props.setPersons(response.data.filter(n => n.name !== undefined))})

                //console.log('getAllPerson: ', response)
                //console.log('after filter: ', response.data.filter(n => n.name !== undefined))
                //console.log(response.data[4].name)
                //props.setPersons(response.data)
                //setPersons(response.data.filter(n => n.name !== undefined))
    }    


    return (
        <table>
                <tbody>
                    {props.namesToDisplay.map(person =>
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.number}</td> 
                            <td><button type="button" onClick={ () => handleDeletePersonName(person.id)}>Delete</button></td>
                            <td>{person.id}</td> 
                        </tr>)}
                </tbody>
            </table>
    )
}

// Component to display the footer
const Footer = () => {
    return (
        <h6>MarkoT 2.17: puhelinluettelo step9</h6>
    )
}

export default App
