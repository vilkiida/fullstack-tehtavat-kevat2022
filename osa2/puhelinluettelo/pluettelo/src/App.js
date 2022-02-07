import { useState } from 'react'
const Contact = ({name, number}) => {
  return(
    <div>
      {name} {number}
    </div>
  )}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
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
          filter shown with<input value={newFilter} onChange={handleFilterChange} />
        </div>
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
        <div>
          {personsToShow.map(person => <div key={person.name}><Contact name={person.name} number={person.number} /></div>)}
        </div>
    </div>
  )

}

export default App