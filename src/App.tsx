import React from 'react';
import Main from './Main';
import './App.css';
import BithdayCard from './components/BithdayCard';

const actionTrigger = () => {
 alert("Happy birthday raji")
}


function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <p onClick={actionTrigger}> Happy birthday RAJALAKSHMI </p>
      <BithdayCard />
    </div>
  );
}

export default App;
