import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state= {

        }
    }

    render(){
        return (
            <div className="text-white"> 
            <input type="text" placeholder="enter mobile number"/>
                {/* <Switch>
                    <Route exact path="/dashboard/main" component={Main}/>
                </Switch> */}
            </div>
        )
    }
}