import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Events from './Components/Pages/Events/Events';
import Reports from './Components/Pages/Reports/Reports';
import Bets from './Components/Pages/Bets/Bets';
import Users from './Components/Pages/Users/Users';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/bets' component={Bets} />
          <Route path='/users' component={Users} />
          <Route path='/markets' component={Reports} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
