import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import SharedPiano from './context/SharedPianoState'
import 'bootstrap/dist/css/bootstrap.min.css'
import KeyNote from './context/KeyNoteState';

ReactDOM.render(
  <React.StrictMode>
    <SharedPiano>
      <KeyNote>
    <Router>
      <App />
    </Router>
    </KeyNote>
    </SharedPiano>
  </React.StrictMode>,
  document.getElementById('root')
);


