import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  return (
    <div className="App">
      
      {/* <LoadCountry></LoadCountry> */}


    </div>
  );
}

// function LoadCountry(){

//   const [countries,setCountries] = useState([])
//   useEffect(()=>{
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res=> res.json())
//     .then(data=> setCountries(data))
//   },[])

//   return(

//     <div className="">

//         <h1 style={{textAlign:"center"}}>Lets Explore All country!!!</h1>
//         <p>Country We Can Visit: {countries.length}</p>

//     </div>

//   );
// }

export default App;
