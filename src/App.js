import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/common/Layout';
import Login from './components/loginPage/Login'
import Dashbaord from './components/dashboard/Dashbaord';
// import Main from './components/dashboard/main/Main';
import Mobile from './components/common/InputItems/mobile'
import alphaNumeric from './components/common/InputItems/alphaNumeric'
import email from './components/common/InputItems/email'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashbaord} />
            <Route exact path="/mobile" component={Mobile} />
            <Route exact path="/alphanumeric" component={alphaNumeric} />
            <Route exact path="/email" component={email} />

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
