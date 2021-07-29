import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import SharedPiano from './context/SharedPianoState'
import 'bootstrap/dist/css/bootstrap.min.css'

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


