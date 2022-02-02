import { useState } from "react";
import "./App.css";
import Lotto from "./components/lotto";

function App() {
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [extraNumber, setExtraNumber] = useState(0);
  return (
    <div className="App">
      <div className="headline">
        <h1>Lotto 6/49</h1>
        <p>Generating lucky numbers</p>
      </div>
      <main className="mainContainer">
        {luckyNumbers.length >= 6 ? (
          <div className="numberContainer">
            <Lotto lottoNumber={luckyNumbers[0]} />
            <Lotto lottoNumber={luckyNumbers[1]} />
            <Lotto lottoNumber={luckyNumbers[2]} />
            <Lotto lottoNumber={luckyNumbers[3]} />
            <Lotto lottoNumber={luckyNumbers[4]} />
            <Lotto lottoNumber={luckyNumbers[5]} />
            <Lotto lottoNumber={extraNumber} extraNumber/>
          </div>
        ) : undefined}

        <div className="button">
          <button
            className="reset"
            onClick={() => {
              setLuckyNumbers([]);
            }}
          >
            Reset
          </button>
          <button
            className="generate"
            onClick={() => {
              let tempArray = [];
              for (let i = 0; i < 6; i++) {
                let singleNumber = Math.floor(Math.random() * 50);
                if (tempArray.find((element) => element === singleNumber)) {
                  singleNumber = Math.floor(Math.random() * 50);
                }
                tempArray.push(singleNumber);
                tempArray = tempArray.sort((a, b) => (a > b ? 1 : -1));
                setLuckyNumbers(tempArray);
              }
               setExtraNumber(Math.floor(Math.random() * 10));
            }}
          >
            Generate Lucky Numbers
          </button>
        </div>
      </main>
    </div>
   );
}

export default App;
