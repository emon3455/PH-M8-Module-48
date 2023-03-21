// import logo from './logo.svg';
import './App.css';
// import {useEffect, useState} from 'react'
import Headers from './components/headers/header';

function App() {
  return (
    <div className="App">
      
      {/* <LoadCountry></LoadCountry> */}

      <Headers></Headers>

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

//         {
//           countries.map(country=> <DisplayCountry name={country.name.common} population={country.population}
//             area={country.area} flag={country.flags.svg}
//           >


//           </DisplayCountry>)
//         }

        

//     </div>

//   );
// }

// function DisplayCountry(props){
//   return(
//     <div className="">
//         <h2>Name: {props.name}</h2>
//         <h4>Population: {props.population}</h4>
//         <h4>Area: {props.area}</h4>
//     </div>
//   );
// }

export default App;
