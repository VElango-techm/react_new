import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/loginPage/Login'
import Dashbaord from './components/dashboard/Dashbaord';
import Main from './components/dashboard/main/Main'

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={Login}  />
          <Route exact path="/dashboard" component={Dashbaord}/>
          <Route exact path="/dashboard/main" component={Main}/>
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
