import { Route, Switch } from 'react-router-dom'
import PianoPage from './components/PianoPage'
import HomePage from './components/HomePage'
// import { useEffect } from 'react'

function App() {
  // useEffect(() => {
  //   document.onkeydown = function (e) 
  //   {
  //    return false;
  //   }

  // }, [])
  return (

    <div className="App">
      <Switch>
        <Route path='/piano' component={PianoPage}/>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

