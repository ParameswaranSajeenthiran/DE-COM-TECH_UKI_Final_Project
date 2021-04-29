import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import SignInSide from "./SignUp";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthService from "../services/auth.service";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
     De-Com-Tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const image={
  width:"100%",
  height:"670px"
}
const form={
  margin:"10px"
  
}
const classes={
  root: {
    height: '100%',
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



export default class CreateMainCom extends Component {
  constructor(props){
    super(props);
this.state={name:"",
numMembers:"",
motto:"",
bankAcc:"",
subCom:[],
coverPhoto:[],
image:[],
 loading: false,
      message: "",
      address1:"",
      address2:"",
      city:"",
      province:"",
      country:"",
      telphone:""

  }
  }


  
  changeName=(ele)=>{
    this.setState({
        name:ele.target.value
    })
   
}
changeDescription=(ele)=>{
  this.setState({
    numMembers:ele.target.value
  })
}
motto=(ele)=>{
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
   address1=(ele)=>{
    this.setState({
        address1:ele.target.value
    })
   
  }
address2=(ele)=>{
    this.setState({
       address2:ele.target.value
    })
   
  }
  city=(ele)=>{
    this.setState({
        city:ele.target.value
    })
   
  }
   province=(ele)=>{
    this.setState({
       province:ele.target.value
    })
   
  }
 country=(ele)=>{
    this.setState({
        country:ele.target.value
    })
   
  }
  telephone=(ele)=>{
    this.setState({
        telephone:ele.target.value
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
       "name":this.state.name,
"numMembers":this.state.numMem,
"motto":this.state.motto,
"bankAcc":this.state.bankAcc,
"subCom":[]
 
     },{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }}).then((res)=>{console.log(res)})
            localStorage.setItem("MainName",this.state.name)
      localStorage.setItem("MainName",this.state.name)
                    localStorage.setItem("MainMotto",this.state.motto)
                    localStorage.setItem("MainNumMembers",this.state.numMembers) 
    }



  handleClick=()=>{
  console.log(this.state)
        axios.post("http://localhost:8080/com",this.state,{  headers: {
          'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
      }})
      
         }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

 AuthService.createMain(this.state.name,this.state.motto,this.state.address1
 +", "+this.state.address2+" "+this.state.city+", "+this.state.province+
 " "+this.state.country,this.state.telephone)
      .then((response) => {
        this.props.history.push("/createSubCom");
        window.location.reload();
        console.log(response.data)
         localStorage.setItem("MainId",response.data.id);
              localStorage.setItem("MainName",this.state.name);
                    localStorage.setItem("MainNumMembers",this.state.address1
 +", "+this.state.address2+" "+this.state.city+", "+this.state.province+
 " "+this.state.country);
                    localStorage.setItem("MainMotto",this.state.motto);
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
   
    
    componentDidMount(){
      localStorage.removeItem("MainId")
          localStorage.removeItem("MainName")
             localStorage.removeItem("MainMotto")
                localStorage.removeItem("MainNumMembers")
    }
    
    
  onFileChangeHandler = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
    let reader = new FileReader()
    reader.readAsDataURL(files[i])
    reader.onload = (e) => {
      console.log(" Imagedata",e.target.result)
      elements.push(e.target.result)
    this.setState({coverPhoto:this.state.coverPhoto.push(elements)})
    }
   console.log(this.state.coverPhoto)
  }
  localStorage.setItem("image",JSON.stringify(this.state.coverPhoto[0]))
  this.setState({image:[...this.state.image,JSON.parse(localStorage.getItem("image"))]})
  console.log(this.state.image)
  }

render(){

    return (
        <React.Fragment>
<Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={6} className={classes.image} /> */}
     <Grid item xs={6}  className={classes.image} >      <img style={image} src="https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img></Grid>
      <Grid item xs={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <form style={form} noValidate>
  
        <div>
        <Typography variant="h6" gutterBottom>
        <GroupAddIcon color="danger"/>  Create Main Community
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          
            <TextField onChange={this.changeName}
           variant="outlined"
              required
              id="firstName"
              name="firstName"
              label="Community Name"
              fullWidth
              autoComplete="given-name"
            /><div>{this.state.comId}</div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField      onChange={this.motto}
         required
        variant="outlined"
              id="lastName"
              name="motto"
              label="Motto"
              fullWidth
              autoComplete="family-name"
            /><div>{this.state.name}</div>
          </Grid>
          <Grid item xs={12}>
            <TextField
           variant="outlined"
          onChange={this.address1 }
              required
              id="Address1"
              name="address1"
              label="Address line1"
              fullWidth
              autoComplete="shipping address-line1"
            /><div>{this.state.description}</div>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
     variant="outlined"
        onChange={this.address2 }
              id="address2"
              name="address2"
              label="Adress line 2"
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField onChange={this.city}
          variant="outlined"
              required
              id="city"
              name="city"
              label="City "
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined"     onChange={this.province} id="state" name="state" label="Province Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
        variant="outlined"
              required  
              onChange={this.country}
              id="zip"
              name="zip"
              label="Country"
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            variant="outlined"
             onChange={this.telephone}
              required
              id="country"
              name="country"
              label="Telephone"
              fullWidth
              autoComplete="shipping country"
            /><input type="file" multiple onChange={this.onFileChangeHandler }/>
          </Grid>
          <Grid item xs={12}>
          
          </Grid>
        </Grid></div>
 
           
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
              onClick={this.handleLogin}>
                       Create Main Community
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
