import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then( res => res.json())
    .then( data => setNayoks(data))
  }, [])

  // const nayoks = [
  //   {name: 'Josim', age: 56},
  //   {name: 'Dipjol', age: 61},
  //   {name: 'Bapparaj', age: 16},
  //   {name: 'Omar Sani', age: 66},
  //   {name: 'Alamgir', age: 70}
  // ]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map( nayok => <Nayok name={nayok.name} key={nayok.id} age={nayok.age}></Nayok>)
      }
      {/* <Nayok name={nayoks[0]} age="56"></Nayok>
      <Nayok name="Sakib"></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[1]}></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  // console.log(result);
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number Of Movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I Have Acted: {props.movies}</h4>
}

function Nayok(props){
  // console.log(props);
  const nayokStyle = {
    border: '2px solid purple',
    color: 'blue',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok-{props.name}</h1>
      <p>I have done 3 movies in {props.age || 40} years</p>
    </div>
  )
}

export default App;
