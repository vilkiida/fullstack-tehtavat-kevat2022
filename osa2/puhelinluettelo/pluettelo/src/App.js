import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({newFilter, handleFilterChange}) => {
  return(
    <div>
      filter shown with<input value={newFilter} onChange={handleFilterChange} />
    </div>
  )}

const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
    <form onSubmit={addName}>
            <div>
              name: <input value={newName} onChange={handleNameChange}/>
              <br></br>
              number <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
  )}

const Persons = ({personsToShow}) => {
  return(
    <div>
      {personsToShow.map(person => <div key={person.name}><Contact name={person.name} number={person.number} /></div>)}
    </div>
  )}
const Contact = ({name, number}) => {
  return(
    <div>
      {name} {number}
    </div>
  )}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const personsToShow = showAll
    ? persons
    : persons.filter(persons => persons.name.includes(newFilter))

  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(x => x.name)
    if (names.includes(newName)) {
      window.alert(newName + ' is already added to the phonebook')
    }
    else {
    const nameObject = {
      name: newName,
      number: newNumber
      }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }}
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
        </div>
      <h2>add a new</h2>
        <div>
          <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
        </div>
      
      <h2>Numbers</h2>
        <div>
          <Persons personsToShow={personsToShow} />
        </div>
    </div>
  )

}

export default App