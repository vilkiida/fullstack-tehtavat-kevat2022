import { useState } from 'react'
const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Results = ({good, neutral, bad}) => {
  return(
  <>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
  </>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headers = ["give feedback", "statistics"]

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log("good")
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log("neutral")
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    console.log("bad")
  }
  return (
    <div>
      <Header text={headers[0]} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header text={headers[1]} />
      <Results good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App