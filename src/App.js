import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let singer ={
    name:"Dr. Mahfuzur Rahman",
    album:"Moner Maje Tomi"
  };
  var style = {
    color : "red",
    backgroundColor : "yellow"
  }
  const StudentName = ['Nahid Hasan','Meherullah Shahin','sabbir al azim','Topu Muns','Saiful haque Zim' ];
  const product =[{name:"Premiere Pro",price:"US$20.99/mo"},{name:"Acrobat Pro",price:"US$14.99/mo"},{name:"Photoshop",price:"US$20.99/mo"}];
 // const ProductName = product.map(product => product.name);
  return (
    <div className="App">
      <header className="App-header">
    
        <h1 style={style}>Singer Name : {singer.name + " "+ singer.album } </h1>
        <p>Album : {singer.album}</p>
        <ol>
          {
            StudentName.map(student => <li>{student}</li>)
          }
        </ol>
        <Counter></Counter>
        <Users></Users>
        {
          product.map(product =>  <Product name={product.name} price={product.price}></Product> )
        }

          {
       StudentName.map(student => <Person name={student} department="Computer science and Engineering"></Person> )
          }
        
      </header>
      
    </div>
  );
}

function Person(props) {
  //console.log(props);

  return(
    <div className="StudentDetails">
      <h1>Name : {props.name}</h1>
      <h4>Computer science and Engineering</h4>
      <h2>Student Of The Year</h2>
    </div>
  )
  
}

function Product(props) {
  var boxPrice ={
    backgroundColor:"#F5F5F5",
    width:"300px",
    color:"black",
    margin:"20px",
    padding:"50px",
    borderRadius:"10px",
    display:"inline-block"
  }
  return(
    <div style={boxPrice}>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button>Bye Now</button>
    </div>
  )
  
}
function Counter(){
const [count,setCount] = useState(10);
const handleIncrease = () => {
  setCount(count + 1);
}
  return(
    <div>
      <h1>Counter : {count} </h1>
      <button onClick = {handleIncrease}>increase</button><br/>
      <button onClick = {() => setCount(count - 1)}>decrease</button>

    </div>
  )
}


function Users(){
  const [users,setUser] = useState([]);

  useEffect (()=>{
    console.log("calling Effect");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  
  return(
    <div>
      <h1>Dynamic User: {users.length}</h1>
      <ol>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ol>
    </div>
  )
}
export default App;
