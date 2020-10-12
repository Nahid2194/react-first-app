import React from 'react';
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
        {
          product.map(product =>  <Product name={product.name} price={product.price}></Product> )
        }
          {/* <Product name={product[0].name} price={product[0].price}></Product>
          <Product name={product[1].name} price={product[1].price}></Product>
          <Product name={product[2].name} price={product[2].price}></Product> */}
          {
       StudentName.map(student => <Person name={student} department="Computer science and Engineering"></Person> )
          }
          {/* <Person name={StudentName[0]} department="Computer science and Engineering"></Person>
          <Person name={StudentName[1]} department="Computer science and Engineering"></Person>
          <Person name={StudentName[2]} department="Computer science and Engineering"></Person>
          <Person name={StudentName[3]} department="Computer science and Engineering"></Person> */}
      </header>
      
    </div>
  );
}

function Person(props) {
  console.log(props);

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
export default App;
