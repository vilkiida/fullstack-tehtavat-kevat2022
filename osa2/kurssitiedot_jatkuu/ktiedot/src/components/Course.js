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
const contents = parts.map(x => <div key={x.id}><Part part={x.name} exercises={x.exercises} /></div> )
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
export default Course
