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
    const [ errorMessage, setErrorMessage ] = useState('')


    // To get name and number data for phonebook from local db.json file
    const hookToGetNameDb = () => {
        personServices
            .getAllPersons()
            .then(response => {
                //console.log('getAllPerson: ', response)
                //console.log('getAllData response.data[4].name', response.data[4].name)
                //setPersons(response.data)
                //console.log('hookToGetNameDb -  getAllPersons response.data', response.data)
                setPersons(response.data.filter(n => n.name !== undefined))
                //console.log('hookToGetNameDb - after setPersons - persons', persons)
            })
      }
    useEffect(hookToGetNameDb,[])


    // Event handler when 'add' button is clicked. Check if input name is already in a phonebook.
    // If yes -> alert popup otherwise -> person name and number is added to the phonebook. 
    // Finally input fields are cleared.
    const addPersonPhonebook = (event) => {
        event.preventDefault()    
        const personObject = {
          name: newName,
          number: newNumber,
        }

        if ((persons.map(person => person.name).includes(newName)) === false ) {
            // Name don't exist -> save name and number to local db.json
            personServices
                .createPerson(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })
        } else {
            // Name already exist in phonebook -> update number
            if (window.confirm(`${newName} is already in a phonebook. Do you want to update the number?`)) {
                //console.log('true - personObject: ', personObject)
                const personToUpdate = persons.filter(person => person.name === personObject.name )
                //console.log('personToUpdate - id : ', personToUpdate[0].id )
                const personUpdateObject = {
                    name: personToUpdate[0].name,
                    number: newNumber,
                    id: personToUpdate[0].id,
                }
                console.log('personUpdateObject : ', personUpdateObject)
                //personToUpdate.concat(personObject)
                //console.log('personToUpdate : ', personToUpdate)
                personServices
                    .updatePerson(personUpdateObject, personToUpdate[0].id)
                    //.then(response => console.log('update : ', response))

                    console.log('persons after db update : ', persons)
                    //.then(() => {
                        //setPersons(persons.filter(person => person.id !== props.id))
                      //  setPersons(persons.filter(n => n.name !== undefined))

                    //})
                setErrorMessage('After "yes" reload browser for update. Update is under work.')
                setTimeout(() => {
                    setErrorMessage('')}, 5000)
            }
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

    // Event handler for deleting name from the phonebook
    const handleDeletePersonName = (props) => {
        console.log('delete clicked - props: ', props)
        if (window.confirm(`Delete ${props.name} ?`)) {
            personServices
                .deletePerson(props.id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== props.id))
                })
        }
    }    

    return (
        <div>
            <h2>Phonebook</h2>

            <Notification message={errorMessage} />

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
                handleDeletePersonName={handleDeletePersonName}
                />

            <Footer />
        </div>
    )
} 
//
// end - of - App
//

// Component to display notification 5sec.
const Notification = (props) => {
    if (props.message === '') {
        return null
    }

    return (
        <div className='error'>{props.message}</div>        
    )
}

// Component to filter names to be displayed based on typed string
const Filter = (props) => {
    return (
        <form>
            <div>Filter existing names by <input value={props.filterString} onChange={props.handleFilterStringInput}/> </div>
        </form>
    )
}

// Component to add new new to p phonebook
const AddNewName = (props) => {
    return (
        <>
            <form onSubmit={props.addPersonPhonebook}>
                <div> Name: <input value={props.newName} onChange={props.handlePersonNameInput}/> </div>
                <div> Number: <input value={props.newNumber} onChange={props.handlePersonNumberInput}/> </div>
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
                handleDeletePersonName={props.handleDeletePersonName}
                />
        )     
    } else {
        // Display only names including filter string
        const filteredPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.filterString.toLowerCase()))
        return (
            <NameTable 
                namesToDisplay={filteredPersons}
                handleDeletePersonName={props.handleDeletePersonName}
                />
        )
    }
}

// Component to display phonebook table
const NameTable = (props) => {
    //console.log('NameTable props : ', props)

    return (
        <table>
                <tbody>
                    {props.namesToDisplay.map(person =>
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.number}</td> 
                            <td><button type="button" onClick={ () => props.handleDeletePersonName(person)}>Delete</button></td>
                            <td>{person.id}</td> 
                        </tr>)}
                </tbody>
            </table>
    )
}

// Component to display the footer
const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: '0.8em'
      }

    return (
        <h6 style={footerStyle}>MarkoT 2.17: puhelinluettelo step9</h6>
    )
}

export default App
