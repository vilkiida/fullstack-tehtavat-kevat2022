const Header = ({name}) => {
  return(
    <h1>
      {name}
    </h1>
  )
}

const Part = ({part, exercises}) => {
  return(
    <p>
      {part} {exercises}
    </p>
  )
}
const Content = ({parts}) => {
  return(
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return(
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}
const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
export default App