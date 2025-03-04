const Header = ({course}) => {
return(
  <div>
    <h1>{course}</h1>
  </div>
)
}
const Content = ({props}) => {
  return(
  <div>
    <Part part={props.part1} exercises={props.exercises1}/>
    <Part part={props.part2} exercises={props.exercises2}/>
    <Part part={props.part3} exercises={props.exercises3}/>
  </div>
  )
}

const Part = ({part, exercises}) =>{
  return(
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

const Total = ({props}) => {
return(
  <div>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content props={{part1, exercises1,part2,exercises2,part3,exercises3}}/>
      <Total props={{exercises1, exercises2, exercises3}}/>
    </div>
  )
}

export default App