import React from 'react'

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
  <button>Click me </button>

   </>
  )
}

export default App