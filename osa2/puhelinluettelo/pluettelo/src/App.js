import { useState } from 'react'
const Contacts = ({contacts}) => {
  const numbers = contacts.map(x => <p key={x.name}>{x.name}</p>)
  return(
    <div>
      {numbers}
    </div>
  )}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const names = persons.map(x => x.name)
    if (names.includes(newName)) {
      window.alert(newName + ' is already added to the phonebook')
    }
    else {
    const nameObject = {
      name: newName
      }
    setPersons(persons.concat(nameObject))
    setNewName('')
    }}
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contacts={persons} />
    </div>
  )

}

export default App