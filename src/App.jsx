import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';

import {Card} from './Components/Cards.jsx'
import { Options } from './Components/Options.jsx';
export const App = () => {
  
  
  const [state, setState] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);


  
  const iconClock = <i className="fa-solid fa-stopwatch"></i>;

  const handlePlayCounter = () => {
    setState(()=>true)
    //   setInterval(()=>{
    //   const interval = setCounter((prev)=> prev + 1);
    // },1000);
  }
  const handleStopCounter = () =>{
    setState(()=>false)
  }

  const handleResetCounter= () => {
    setCounter(0);
    setCounter2(0);
    setCounter3(0);
    setCounter4(0);
    setCounter5(0);
    setCounter6(0);

  }

  useEffect(()=>{
    const interval = setTimeout(()=>{
      setCounter((prev)=> prev + 1);
    },1000);

    if(state==false){
      return clearInterval(interval);
    }
  },[state,counter])
  
  useEffect(()=>{ 
    if(counter===10){
      setCounter(0);
      setCounter2(counter2 + 1);
    } 
    if(counter2===10){
      setCounter2(0);
      setCounter3(counter3 + 1);
    } 
    if(counter3===10){
      setCounter3(0);
      setCounter4(counter4 + 1);
    } 
    if(counter5===10){
      setCounter4(0);
      setCounter5(counter5 + 1);
    } 
    if(counter5===10){
      setCounter5(0);
      setCounter6(counter6 + 1);
    } 
    
  },[counter, counter2, counter3, counter4, counter5, counter6])

  return (
    <section className='container'>
      <div className='row gap-2 mt-5 d-flex justify-content-center'>
        <Card element={iconClock}/>
        <Card element={counter6}/>
        <Card element={counter5}/>
        <Card element={counter4}/>
        <Card element={counter3}/>
        <Card element={counter2}/>
        <Card element={counter}/>
      </div>
      <div className='row'>
        <Options handlePlayCounter={handlePlayCounter} handleStopCounter={handleStopCounter} handleResetCounter={handleResetCounter}/>
      </div>
    </section>
  )
}