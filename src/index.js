import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GifExpertApp as GifFindApp} from './GifExpertApp'


ReactDOM.render(
  <React.StrictMode>
    <GifFindApp defaultcategories={['one punch',"goku"]} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
