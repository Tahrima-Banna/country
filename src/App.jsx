
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const fetchCountries = async()=>{
    
    const res =await fetch('https://openapi.programming-hero.com/api/all')
     return res.json();
  }

function App() {
  
  const countryPromise = fetchCountries();
  return (
    <>
    
      <h1>React is loading....</h1>
     <Suspense fallback={<p>Data is Loading....</p>}>
      <Countries countryPromise={countryPromise}></Countries>
     </Suspense>
      
    </>
  )
}

export default App
