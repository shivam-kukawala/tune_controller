import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Homepage from "./Homepage";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <Homepage/>
        </div>
        ) 
    }
}

const appDiv = document.getElementById("app");
ReactDOM.render(<App/>, appDiv);