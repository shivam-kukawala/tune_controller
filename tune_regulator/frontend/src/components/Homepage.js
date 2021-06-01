import React, { Component } from "react";
import Makeroom from "./Makeroom";
import Connectroom from "./Connectroom";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"; 
import Room from "./Room";

export default class Homepage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <Router>
            <Switch>
                <Route exact path = "/"><div>This is the home page</div></Route>
                <Route path="/connect" component={Connectroom}/>
                <Route path="/make" component={Makeroom}/>
                <Route path="/room/:roomCode" component={Room}/>
                
            </Switch>

        </Router>);
    }
}
