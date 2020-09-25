import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mobile from '../../common/InputItems/mobile';
import alphaNumeric from '../../common/InputItems/alphaNumeric'


export default class Main extends Component{
    constructor(props){
        super(props)
        this.state= {

        }
    }

    render(){
        return (
            <div className="text-white"> 
            <BrowserRouter>
                    <Switch>
                        {/* <Route exact path="/mobile" component={Mobile} />
                        <Route exact path="/alphanumeric" component={alphaNumeric} /> */}
                    </Switch>
            </BrowserRouter>
                {/* <input type="text" placeholder="enter mobile number"/> */}
                {/* <InputUtility inputPlaceholder="Enter Mobile number" label="Mobile Number Validation" /> */}
            </div>
        )
    }
}