import { Route, Switch } from 'react-router';
// import './App.css';
import './App.css'
import Header from './components/Header/Header';
import Resume from './components/Resume/resume'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route component={Resume} path="/user"/>
      </Switch>
    </div>
  );
}

export default App;
