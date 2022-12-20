import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [firstname , setFirstname] = useState('')
  const [Email ,setEmail] = useState('')
  const [Age , setAge] = useState('')

  const [people , setPeople] = useState([])

  const handledata = (e) =>{
    e.preventDefault()
    const person = {
      firstname:firstname,
      Email:Email,
      Age:Age
    }
    setPeople( (people) =>{
        return [...people , person]
    })
    setFirstname('')
    setAge('')
    setEmail('')
  }
  return (
    <form>
      <div className='form-controll'>
        <label htmlFor="Name">Name</label>
        <input type="text" id='name' value={firstname}
        
              onChange={(e) =>{
                  setFirstname(e.target.value)
              }}
        
        ></input>
      </div>
      <div className='form-controll'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' value={Email}
          onChange={(e) =>{
                  setEmail(e.target.value)
              }}
        
        ></input>
      </div>
      <div className='form-controll'>
        <label htmlFor="Email">Age</label>
        <input type="number" id='Age'value={Age}
          onChange={(e) =>{
                  setAge(e.target.value)
              }}
        
        
        ></input>
      </div>
      <button className="btn" onClick={handledata}>Submit</button>
    </form>
  );
}

export default App;
