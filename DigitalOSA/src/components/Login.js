import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Card, CardContent, Typography, CardActionArea, Grid, FormControl, CircularProgress } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import SignInSide from "./SignIn";
import AuthService from "../services/auth.service";

const style = {
  root: {
    minWidth: 275,
    backgroundColor:'white',
    marginTop: 20,
    color: 'black'
  }
}


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password)
      .then(() => {
     
      localStorage.setItem("password",this.state.password);
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    return (
    
  
      <Grid container spacing={3}>
      
                          <Form onSubmit={this.handleLogin}>
        
                    <TextField
                         onChange={this.onChangeUsername}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="UserName"
              autoComplete="email"
              autoFocus
            />
            <TextField
               onChange={this.onChangePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
      
            >
              Log In
            </Button>
   
                
                  {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </Form>
           
  
      </Grid>
    );
  }
}
