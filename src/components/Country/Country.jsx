import React, { useState } from 'react';
import './country.css'
const Country = ({country,handleCount,handleFlag}) => {
     //console.log(handleCount)
    const[visited,setVisited]=useState(false);
  
   const name = country.name.common;
   const flags = country.flags.flags.png
   const area =country.area.area
//    console.log(flags)

    const handleClick=()=>{
       setVisited(!visited);
       handleCount(country);

    //    if(visited){
    //      setVisited(false);
    //    }else{
    //     setVisited(true)
    //    }
     //setVisited(visited?false:true)

    }
    return (
        <div className={`country ${visited&& 'country-visited'}`}>

            <img src={flags} alt={country.flags.flags.png}></img>
           <h3> name:{name}</h3>
           <h3> populations:{country.population.population}</h3>
           <h3> area:{area}{area>300000?"country is big":"country is small"}</h3>
           <button onClick={handleClick}>
            {visited?"visited":"not visited"}
            </button>
            <button onClick={()=>{handleFlag(flags)}}>Add Flag</button>
            
        </div>
    );
};

export default Country;