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

const StatisticLine = ({text, value}) => {
  return(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}
const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all == 0) {
    return(
      <div>No feedback given</div>
    )
  }
  return(
  <table>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive} />
  </table>
  )
}
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headers = ["give feedback", "statistics"]
  const all = good + neutral + bad
  const average = (good*1 + neutral*0 + bad*(-1)) / all
  const positive = (good / all) * 100 + "%"

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App