import React, { useState } from 'react';
import './App.css';
import DisplayComponent from './components/DisplayComponent'
import ButtonsComponent from './components/ButtonsComponent'

function App() {
  const [time, setTime] = useState({
    ms:0, s:0, m:0, h:0
  })

  const startClock = () =>{
    setInterval(run, 80);
  }

  let updtMs=0, updtS=0, updtM=0, updtH=0
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
          <ButtonsComponent start={startClock}/>
        </div>
    </div>
  );
}

export default App;
