import logo from './logo.svg';
import './App.css';
import data from './data'
import React from 'react'
import ReactDOM from 'react-dom';

function App() {
  const[people,setpeople]=React.useState[data]
 return <React.Fragment>
   <section className='container'>
<h2>
 5 Birthdays Today
</h2>
<div className='list'>
  <div className='item'>
    <h3>Vishal Chauhan</h3>
    <p>19 years</p>
  </div>
  <div className='item'>
    <h3>Rahul Chauhan</h3>
    <p>
      20 years
    </p>
    </div> 
      <div className='item'>
    <h3>Rahul Chauhan</h3>
    <p>
      20 years
    </p>
    </div> 
     <div className='item'>
    <h3>Rahul Chauhan</h3>
    <p>
      20 years
    </p>
    </div> 
     <div className='item'>
    <h3>Rahul Chauhan</h3>
    <p>
      20 years
    </p>
    </div>
</div>
<button className='btn'>Click Me</button>
 </section>
 </React.Fragment>
}

export default App;
