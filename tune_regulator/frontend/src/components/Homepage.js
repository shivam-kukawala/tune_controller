import React, { Component } from "react";
import Makeroom from "./Makeroom";
import Connectroom from "./Connectroom";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"; 

export default class Homepage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <Router>
            <Switch>
                <Route exact path = "/"><p>This is the home page</p></Route>
                <Route path="/connect" component={Connectroom}/>
                <Route path="/make" component={Makeroom}/>
            </Switch>

        </Router>);
    }
}
