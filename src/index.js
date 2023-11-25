import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './styles.css';
import Game from './App';

ReactDOM.render(
  <StrictMode>
    <Game />
  </StrictMode>,
  document.getElementById('root')
);
