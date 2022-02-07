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
  const contents = parts.map(x => <p key={x.id}><Part part={x.name} exercises={x.exercises} /></p> )
  console.log(contents)
  return(
    <div>
      {contents}
    </div>
  )}

const Total = ({parts}) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises
      }, 0)
    return(
      <div>
        <b>total of {total} exercises</b>
      </div>
    )
  }
const Course = ({course}) => {
  return(
    <div>
      <Header name={course.name} />
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