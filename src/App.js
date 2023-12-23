import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  const[advice, setAdvice] = useState('');
  useEffect(() => {
    getAdvice();
  },[])
  
  const getAdvice = async () => {
      const response = await fetch(`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      console.log(data.activity);
      setAdvice(data.activity)
    }

  
  return (
  <div>
    <div className="App">
      <h4>Online-application</h4>
      <h1>What things to do?</h1>
      <h3>{advice}</h3>
      {/* <button onClick={getAdvice}>Get new advice</button> */}
      <button onClick={getAdvice} type="button" className="btn cube cube-hover">
        <div className="bg-top">
         <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
         <div className="bg-inner"></div>
        </div>
        <div className="bg">
         <div className="bg-inner"></div>
        </div>
        <div className="text">Get new advice</div>
      </button>
    </div>
    <div className='App-container'>
      <p>?</p>
      <p>?</p>
    </div>
  </div>
  );
}

export default App;
