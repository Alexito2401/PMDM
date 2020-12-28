import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Events from './Components/Pages/Events';
import Markets from './Components/Pages/Markets';
import Bets from './Components/Pages/Bets';
import Users from './Components/Pages/Users';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/events' component={Events}/>
          <Route path='/markets' component={Markets}/>
          <Route path='/bets' component={Bets}/>
          <Route path='/users' component={Users}/>
        </Switch>
      </Router> 

    </>
  );
}

export default App;
