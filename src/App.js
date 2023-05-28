import {  useEffect, useState } from 'react';
import './App.css';
import { CurrencyRate } from './components/CurrencyRate';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { getCurrencyList } from './data/api';
import CurrencyConversionRenderer from './components/CurrencyConversionRenderer';




function App() {
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true)  

  useEffect(() => {
    (async ()=> {
      const data = await getCurrencyList();
      setRates(data)
      setIsLoading(false)
      console.log(data)
    })()
  }, [])
  

  return (
    <div className="App">
      <Navigation /> 
      <Routes>
        <Route path = "/"  element = {<CurrencyConversionRenderer rates={rates} isLoading={isLoading}/>}/>
        <Route path = "rate" element = {<CurrencyRate rates={rates}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
