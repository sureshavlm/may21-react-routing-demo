import logo from './logo.svg';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Users from './components/Users';
import Products from './components/Products';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
              <Link to="/" >Home</Link> |
              <Link to="/about">About</Link> |
              <Link to="/dashboard">Dashboard</Link> |
              <Link to="/users">Users</Link> |
              <Link to = "/products">Products</Link>
        </div>
       { /* swith is like container to load my target component */ }
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/dashboard">
            <Dashboard />
          </Route>
          <Route path = "/users">
            <Users />
          </Route>
          <Route path = "/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
