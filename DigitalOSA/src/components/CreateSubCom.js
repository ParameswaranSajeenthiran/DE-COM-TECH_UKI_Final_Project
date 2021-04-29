import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import axios from 'axios'
import SignInSide from "./SignUp";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AuthService from "../services/auth.service";

import { makeStyles } from '@material-ui/core/styles';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const image={
  width:"100%",
  height:"675px"
}
const form={
  margin:"10px"
  
}
const classes={
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: "100px 50px ",
    backgroundColor:"",
  },
  form: {
    width: '75%', // Fix IE 11 issue.
    
    margin:"10px 10px 10px 10px "
  },
  submit: {
    margin:"10px",
  },
}


// const classes = useStyles();



export default class CreateSubCom extends Component {
  constructor(props){
    super(props);
this.state={name:"",
numMem:"",
motto:"",
bankAcc:"",
id:localStorage.getItem("MainId"),
 loading: false,
      message: "",
      bankName:"",
      bankBranch:"",
      chatId:""

  }
  }


  
  changeName=(ele)=>{
    this.setState({
        name:ele.target.value
    })
   
}
  createChat=()=>{
   axios.post("https://api.chatengine.io/chats/",{
     "title": this.state.name+"("+localStorage.getItem("MainName")+")"
    
}
   ,{  headers: {

'Project-ID':'6d6599eb-dc9f-4feb-a2e0-90b67aaf9a37',

'User-Name':'sajeenthiran', 

'User-Secret':'sajee123'


      }})
      .then((response)=>{      
      localStorage.setItem("chatId",response.data.id);
        this.setState({chatId:localStorage.getItem("chatId")})
           
       
              });
   
}
changeDescription=(ele)=>{
  this.setState({
    numMembers:ele.target.value
  })
}
changeId=(ele)=>{
 this.setState({
   motto:ele.target.value
 })
 
 

  
}

numMembers=(ele)=>{
 this.setState({
   bankAcc:ele.target.value
 })
}

com1=(ele)=>{
    this.setState({
      subName :ele.target.value
    })
   
  }
  
  
  changeId=(ele)=>{
    this.setState({
      subId:ele.target.value
    })
   
  }
  com2=(ele)=>{
    this.setState({
        subMotto:ele.target.value
    })
   
  }
  com3=(ele)=>{
    this.setState({
        subBankAcc:ele.target.value
    })
   
  }
    com4=(ele)=>{
    this.setState({
        subNumMem:ele.target.value
    })
   
  }
   bankName=(ele)=>{
    this.setState({
        bankName:ele.target.value
    })
   
  }
   bankBranch=(ele)=>{
    this.setState({
        bankBranch:ele.target.value
    })
   
  }
   bankAcc=(ele)=>{
    this.setState({
        bankAcc:ele.target.value
    })
   
  }
nextPage=()=>{
  this.setState((prevState) => ({
    page: prevState.page + 1
}), () => {
    console.log('Callback value = ', this.state.page)
  }
 )

}
prevPage=()=>{
  this.setState((prevState) => ({
    page: prevState.page - 1
}), () => {
    console.log('Callback value = ', this.state.page)
  }
 )
}

  handleSubmit1=()=>{

      axios.post("http://localhost:8080/com",{
       "name":this.state.subName,
"numMembers":this.state.subNumMem,
"motto":this.state.subMotto,
"bankAcc":this.state.subBankAcc,
 "subCom":[]
     },{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
  
    }



  handleSubmit=()=>{
  
      axios.post("http://localhost:8080/com?mainComName=test",this.state,{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
      
      
       axios.post("http://localhost:8080/com?mainComName=test",this.state,{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
  
    }

    handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
     chatId:localStorage.getItem("chatId")
    })
 

    AuthService.createSub(this.state.id,this.state.name,"knowlegde is wisdom",this.state.chatId,"234234")
      .then((response) => {
      localStorage.setItem("subId",response.data.id);
              localStorage.setItem("subName",this.state.name);
                    localStorage.setItem("subMotto",this.state.motto);
        this.props.history.push("/createdMainCom");
        window.location.reload();
        console.log(response.data)
         
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
   
    
    
    
    

render(){


    return (
        <React.Fragment>
<Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={6} className={classes.image} /> */}
     <Grid item xs={6}  className={classes.image} >      <img style={image} src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img></Grid>
      <Grid item xs={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <form style={form} noValidate>
  
        <div>
        <Typography variant="h6" gutterBottom>
  <GroupAddIcon/>   Create SubCommunity
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} >
          
            <TextField onChange={this.changeName}
              required
                  variant="outlined"
     
              id="firstName"
              name="firstName"
              label=" Sub Community Name"
              fullWidth
              autoComplete="given-name"
            /><div>{this.state.comId}</div>
          </Grid>
          <Grid item xs={12} >
            <TextField      onChange={this.motto}
         required
              variant="outlined"
              id="lastName"
              name="lastName"
              label="Motto"
              fullWidth
              autoComplete="family-name"
            /><div>{this.state.name}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
                 variant="outlined"
          onChange={this.bankAcc}
              required
              id="address1"
              name="address1"
              label="Bank Account"
              fullWidth
              autoComplete="shipping address-line1"
            /><div>{this.state.description}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
             onChange={this.bankBranch}
                 variant="outlined"
              id="address2"
              name="address2"
              label="Bank Branch"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField onChange={this.bankName}
              required
                   variant="outlined"
              id="city"
              name="city"
              label="Bank Name"
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid><Button  onClick={()=>{
   axios.post("https://api.chatengine.io/chats/",{
     "title": this.state.name+"("+localStorage.getItem("MainName")+")"
    
}
   ,{  headers: {

'Project-ID':'6d6599eb-dc9f-4feb-a2e0-90b67aaf9a37',

'User-Name':'sajeenthiran', 

'User-Secret':'sajee123'


      }})
      .then((response)=>{      
      localStorage.setItem("chatId",response.data.id);
        this.setState({chatId:localStorage.getItem("chatId")})
           
       
              });
   
}}>  <FormControlLabel
              control={<Checkbox  value="remember" color="primary" />}
              label="Create Chat "
            /></Button>
        
        
       
         
        </Grid><br/></div>
  {
        this.state.page==1?(
<div>
<Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="SubComunity Name" fullWidth autoComplete="cc-name" onChange={this.changeId}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          onChange={this.com1}
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="SubCommunity motto" fullWidth autoComplete="cc-exp" onChange={this.com2}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField onChange={this.com3}
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="primary">create chat</Button>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          /><button onClick={this.handleSubmit}>submit this button</button>
        </Grid>
      </Grid>
</div>
        ):null
      } {this.state.page==2?(
        
          <div>
            <Grid item xs={12}>
              <Paper><Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Typography variant="h6" gutterBottom>
                Main Community Name
                </Typography>
                <Typography variant="h6" gutterBottom>
                Main Community Motto
                </Typography>
                <Typography variant="h6" gutterBottom>
                Main Community Bank Account No
                </Typography>
                <Typography variant="h6" gutterBottom>
                Main Community Number Of Members
                </Typography>
                <Typography variant="h6" gutterBottom>
                Sub Community Name
                </Typography>
                <Typography variant="h6" gutterBottom>
                sub Community Motto
                </Typography>
                <Typography variant="h6" gutterBottom>
                Sub Community number of Members
                </Typography>
                <Typography variant="h6" gutterBottom>
                Sub Community bank Account
                </Typography>

              </Grid>
              <Grid item xs={6}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Typography variant="h6" gutterBottom>
                {this.state.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.motto}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.name}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.bankAcc}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.numMem}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.subName}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.motto}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.subnNumMem}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {this.state.subBankAcc}
                </Typography>
              </Grid>
           
              </Paper>
            </Grid>
          </div>
        
      ):null}
           
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/createdMainCom"
              onClick={this.handleLogin}
            >
              Create  SubCommunity
            </Button>
            <Grid container>
             
           
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
      
        <div>
     
     
      </div>
      </React.Fragment>
    
    )
  
    }
    
  }
