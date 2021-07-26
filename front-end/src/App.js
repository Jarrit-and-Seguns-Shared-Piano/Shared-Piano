import { Route, Switch } from 'react-router-dom'
import PianoPage from './components/PianoPage'
import HomePage from './components/HomePage'

function App() {
 
  return (

    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/piano' component={PianoPage}/>
      </Switch>
    </div>
  );
}

export default App;

