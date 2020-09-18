import React, { useState } from 'react';
import './App.css';
import DisplayComponent from './components/DisplayComponent'
import ButtonsComponent from './components/ButtonsComponent'

function App() {
  
  const [status, setStatus] = useState(0)
  //0 stop
  //1 run
  //2 stopped

  const [inter, setInter] = useState(null)

  const [time, setTime] = useState({
    ms:0, s:0, m:0, h:0
  })

  const startClock = () =>{
    setStatus(1)
    setInter( setInterval(run, 80) )
  }
  const stopClock = () =>{
    setStatus(2)
    clearInterval(inter)
  }
  const resumeClock = () =>{
    startClock()
  }
  const resetClock = () =>{
    clearInterval(inter)
    setStatus(0)
    setTime({ms:0, s:0, m:0, h:0})
  }

  let updtMs=time.ms, updtS=time.s, updtM=time.m, updtH=time.h
  const run = () => {
    if(updtMs === 60){
      updtS++
      updtMs=0
    }
    if(updtS === 60){
      updtM++
      updtS=0
    }
    if(updtM === 60){
      updtH++
      updtM=0
    }
    updtMs++
    return setTime({ms:updtMs, s:updtS, m:updtM, h:updtH})
  }

  return (
    <div className="App card bg-danger text-white">
        <div className="card-body w-100">
          <DisplayComponent time={time}/>
          <ButtonsComponent status={status} start={startClock} stop={stopClock} resume={resumeClock} reset={resetClock}/>
        </div>
    </div>
  );
}

export default App;
