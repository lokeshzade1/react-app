import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [N,setN]=useState(false)
  const [E,setE]=useState(false)
  const [ph,setph]=useState('')
  const [pass,setpassword]=useState(false)
  const [email,setemail]=useState('')
  function Name(e){
    let val=e.target.value
    if(val.length>3){
      let op='1234567890?/._-@!&*^()~`+\|<>,'
      if(op.includes(val[0])){
        setN(false)
      }
      else{
        setN(true)
      }
    }
    else{
      setN(false)
    }
  }
  function Email(e){
    let sample= e.target.value
    let err='@'
    var result=sample.split('@')[0]
    if(sample.length>3){
      if(sample.includes(err)){
        setE(true)
        console.log('yes')
        setemail(result)
      }
      else{
        setE(false)
      }
    }
    else{
      setE(false)
    }

  }
  function Phone(e){
    let sample=e.target.value.split('').map(Number)
    let err=NaN
   if(sample.length<10){
    setph(false)
   }
   else{
    if(sample.includes(err)){
     setph(false)
    }
    else{
      setph(true)
    }
   }
  }
  function password(e){
    if(e.target.value.length<6){
      setpassword(false)
    }
    else{
      setpassword(true)
    }
  }
  function hand(e){
    e.preventDefault()
    if(N&&E&&ph&&pass){
      alert('Hello'+' ' + email)
    }
  }
  return (
    <div id="main">
      <form onSubmit={hand} >
        <div>
        <label >Name</label> <br></br>
        <input data-testid = 'name'  type='name' onChange={Name}></input><br></br>
        {N?<span></span>:<span>Name must alphanumeric</span>}
        </div>
        <div>
        <label >Email</label> <br></br>
        <input data-testid = 'email'  type='email' onChange={Email}></input><br></br>
        {E?<span></span>:<span>Email must cointain @</span>}
        </div>
        <div>
        <label> Gender</label> <br></br>
        <select>
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
        </div>
        <div>
        <label >Phone</label> <br></br>
        <input data-testid = 'Phoneno'  type='text' onChange={Phone}></input><br></br>
        {ph?<span></span>:<span>Phone numer must cointain Valide Number</span>}
        </div>
        <div>
        <label >Password</label><br></br>
        <input data-testid = 'name'  type='password' onChange={password}></input><br></br>
        {pass?<span></span>:<span>password must cointain 6 character</span>}
        </div>
        <div><button onClick='submit'>Submit</button></div>
      </form>
    </div>
  )
}


export default App;
