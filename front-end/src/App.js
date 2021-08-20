import { Route, Switch } from 'react-router-dom'
import PianoPage from './components/PianoPage'
import HomePage from './components/HomePage'

function App() {

  return (

    <div className="Apps">
      <Switch>
        <Route path='/piano' component={PianoPage}/>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

