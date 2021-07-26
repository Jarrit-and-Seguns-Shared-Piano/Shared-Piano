import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import SharedPiano from './context/SharedPianoState'

ReactDOM.render(
  <React.StrictMode>
    <SharedPiano>
    <Router>
      <App />
    </Router>
    </SharedPiano>
  </React.StrictMode>,
  document.getElementById('root')
);


