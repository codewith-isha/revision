import React from 'react'
// const name = "Gaurav"
// const age = 23
// const city = "New delhi"
const person = [{
  name:"Gaurav",
  age:23,
  city:"New Delhi"
}]

const App = () => {
  return (
   <>
  <h1>
    My name is {person[0].name}
  </h1>

   </>
  )
}

export default App