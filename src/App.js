import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
