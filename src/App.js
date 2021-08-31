import './App.css';
import { useState } from 'react';

import Form from './components/Form';
import { Winner } from './components/Winner';

function App() {
  const [winnerName, setWinnerName] = useState('');
  const [winnerNumberList] = useState([2, 14, 15, 16]);
  const [surpriseBox, setSurpriseBox] = useState({});
  const [userName, setUserName] = useState('');

  const formSubmitHandler = e => {
    e.preventDefault();
    let obj = { ...surpriseBox }
    if (!obj[userName]) {
      obj[userName] = 1
    } else {
      obj[userName] += 1
    }
    setSurpriseBox(obj);
    console.log(surpriseBox)
    findWinner()
    setUserName(" ");
  }

  const findWinner = () => {
    for (let i = 0; i < winnerNumberList.length; i++) {
      if (surpriseBox[userName] === winnerNumberList[i]) {
        setWinnerName(userName);
        return
      }
    }
  }
  const nameChangeHandler = e => {
    setUserName(e.target.value);
  }

  return (
    <div className="App">
      <Form
        formSubmitHandler={formSubmitHandler}
        nameChangeHandler={nameChangeHandler}
        userName={userName}
      />
      <Winner winnerName={winnerName} />
    </div>
  );
}

export default App;



