import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/common/Layout';
import Login from './components/loginPage/Login'
import Dashbaord from './components/dashboard/Dashbaord';
import Main from './components/dashboard/main/Main'
import InputComponent from './components/common/inputComponent'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashbaord} />
            <Route exact path="/mobile" component={Main} />
            {/* <Route exact path="/mobile" component={InputComponent}/>`
          <Route exact path="/email" component={InputComponent}/>
          <Route exact path="/alphanumeric" component={InputComponent}/> */}
          </Switch>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
