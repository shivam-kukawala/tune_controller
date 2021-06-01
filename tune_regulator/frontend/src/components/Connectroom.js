import React, { Component } from "react";
import { TextField, Button, Grid, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Connectroom extends Component {
    constructor(props){
        super(props);
        this.state ={
            roomCode: "",
            error: "",
        }
        this.handleRoomCodeChange =  this.handleRoomCodeChange.bind(this);
        this.enterButtonPressed =  this.enterButtonPressed.bind(this);
    }

    render(){
        return (
            <Grid container spacing={1} >
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                    error={this.state.error}
                    label="Code"
                    placeholder="Enter a Room Code"
                    value={this.state.roomCode }
                    helperText= {this.state.error }
                    variant="outlined"
                    onChange={this.handleRoomCodeChange}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="primary" onClick={this.enterButtonPressed}>
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        )
    }

handleRoomCodeChange(e){
    this.setState({
        roomCode: e.target.value
    })
}

enterButtonPressed(e){
    console.log(this.state.roomCode);
}
}
