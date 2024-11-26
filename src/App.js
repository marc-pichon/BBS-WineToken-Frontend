
import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import Cellar from "./components/Cellar";
import MintCellar from "./components/MintCellar";
import AddBottle from "./components/AddBottle";

function App() {
  const [userAddress, setUserAddress] = useState("");  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ConnectWallet onConnect={setUserAddress} />
      {userAddress && (
        <>
          <Cellar userAddress={userAddress} />
          <MintCellar userAddress={userAddress} />
          <AddBottle userAddress={userAddress} />
        </>
      )}
    </div>
  );
}

export default App;

