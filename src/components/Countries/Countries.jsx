import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'


const Countries = ({countryPromise}) => {
    const [visitedCountries,setVisitedCountries]= useState([]);
    const [visitedFlag,setVisitedFlag]=useState([])

   // const flags = country.flags.flags.png

    const handleCount=(country)=>{
       //console.log("handle count is clicked",country)
       const newVisited =[...visitedCountries,country]
       setVisitedCountries(newVisited);

    }
    const handleFlag=(flag)=>{
      const newVisitedFlag =[...visitedFlag,flag];
      setVisitedFlag(newVisitedFlag);
    }
    const countriesData= use(countryPromise)
     const countries= countriesData.countries
     console.log(countriesData)
    return (
        <div>
        <h1>Number of  countries:{countries.length}</h1>
        <h3>Total Countries:{visitedCountries.length}</h3>
         <h3>Total visited flags:{visitedFlag.length}</h3>
          <ol>
             {
              visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
             }
          </ol>
         <div className='visited-flag'>
           {
            visitedFlag.map((flag,index)=><img key={index} src={flag}></img>)
           }
         </div>
        
        <div className="countries">
          {
          countries.map(country=><Country key={country.cca3.cca3} 
          country={country} handleCount={handleCount} handleFlag={handleFlag}>

          </Country>)
        }
        </div>
        </div>
    );
};

export default Countries;