import logo from './logo.svg';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NavBer from './components/NavBer/NavBer';


function App() {
  return (
    <div className="App container">
          

      <NavBer></NavBer>
      
      <Router>
  <Switch>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/country/:name">
      <CountryDetail></CountryDetail>
    </Route>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="*">
      <NotFoundPage></NotFoundPage>

    </Route>
  </Switch>
</Router>
      
    </div>
  );
}

export default App;
