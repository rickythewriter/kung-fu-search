import { useState } from 'react';
import './App.css';
import AllHands from './components/AllHands';
import Search from './components/Search';

function App() {

  const [seeList, toggleSeeList] = useState(false);

  return (
    <div className="App">
      <h1>Eighteen Hands of Wing Chun<br/>詠春十八手</h1>
      <div id='table-container'>
        <Search />
        <a
          onClick={() => toggleSeeList(!seeList)}
        >
          {seeList ? "Hide List of Hands" : "See List of Hands"}
        </a>
        {seeList && <AllHands />}
      </div>
    </div>
  );
}

export default App;