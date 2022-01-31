import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// moralis
import{MoralisProvider} from 'react-moralis'
const appId = "saSzi0eCiyxeX1LFINesPiUAv49gFTNYoaIWrdav"
const serverUrl= "https://txeh54socvkc.usemoralis.com:2053/server"



ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
