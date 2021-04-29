import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./Chat.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton, TextField } from "@material-ui/core";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AuthService from "./services/auth.service";
import { AccountCircle } from "@material-ui/icons";
import About from "./components/About";
import Blog from "./components/Blog";
import CreateSubCom from "./components/CreateSubCom";
import "./assets/css/style.css"

import "./assets/vendor/bootstrap/css/bootstrap.min.css" 
import "./assets/vendor/icofont/icofont.min.css" 
import "./assets/vendor/font-awesome/css/font-awesome.min.css" 
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css" 
import "./assets/vendor/venobox/venobox.css" 
import "./assets/vendor/aos/aos.css" 
import GoogleChart from "./components/GoogleCharts";
import SubCommunity from "./components/SubCommunity";


import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Hero from "./components/Hero";
import SearchCommunity from "./components/SearchCommunity";
import ChatApp from "./components/Chat";
import CreateMainCom from "./components/CreateMainCom";
import CreatedMainCom from "./components/CreatedMainCom";

import SubComList from "./components/SubComList";
import MainComList from "./components/MainComList";
import MainComCreating from "./components/MainComCreating";
import Dashboard from "./components/Dashboard";
import JoinedDashboard from "./components/JoinedDashboard";
import Reports from "./components/Reports";
import ReportsView from "./components/ReportView";
import Activities from "./components/Activities";
import Doc from "./components/Doc";
import Slide from "./components/Slide";
import axios from 'axios'
import SpreadSheet from "./components/SpreadSheet";
import ActivitiesView from "./components/ActivitiesView";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GooglePay from './components/GooglePay';
import Video from './components/Video';
import HomePage from './components/Chat';
import Calendar from './components/Calendar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import logo from"./components/tayu2.png";
import { makeStyles } from '@material-ui/core/styles';



// import "./assets/img/favicon.png" 
// import "./assets/img/apple-touch-icon.png"
const style = {
  paper: {
  align:"right",
    flexGrow: 1,
   backgroundColor:"inherit",
    color: 'black'
  },  paper1: {
    flexGrow: 1,
   backgroundColor:"inherit",
    color: 'black',
    transform:"translate(150px,0px)"
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  }
 
}


class App extends Component {
  constructor(props) {
    super(props);
   
    this.logOut = this.logOut.bind(this);
    this.state = {

      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      value: 0,
        community:true,
      communityType:"community",
      mainCom:false,
      subCom:true
    };
  }

  

  componentDidMount() {
    const user = AuthService.getCurrentUser();
  const user1=JSON.parse(localStorage.getItem("user"))
  if(user1!=null){ const username1=user1.username}
    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
    
    
  }
  logOut() {
    AuthService.logout();
  }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  

  logOut () {
    localStorage.clear()
  }
changeSubCommunity=()=>{
  this.setState({
  community:false,
  communityType:"sub Commuinty"
  })
}
  render() {
      const user1=JSON.parse(localStorage.getItem("user"))

     const subCom=localStorage.getItem("subId")
    const { currentUser, showAdminBoard } = this.state;

  
    return (

   <div classNamae="app">
  
    <Router>
   
		<Switch>
    <Route exact path={["/", "/home"]} component={Hero} />

    </Switch>
     

  
  {/* <header id="header">
    <div class="container d-flex align-items-center">

      <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt=""/></a>
      Uncomment below if you prefer to use a text logo
      <h1 class="logo mr-auto"><a href="index.html">Digital OSA</a></h1> */}

<AppBar position="sticky">
           <Toolbar>
               <Paper style={style.paper} elevation={0}>
                 {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                   <MenuIcon />
                </IconButton> */} 
                 <Button href="/" color='inherit'>
                    <div  className="hero-logo1">
     
          <img  src={logo} alt="logo"/>
        </div>
                 </Button>
                 <Button href="/home" color='inherit'>
                   <strong>Explore </strong>
                 </Button>
                
                   <Button href="/chat" >
                     <strong>chat</strong>
                   </Button>
                   <Button href="/video" color='inherit'>
                     <strong></strong>
                   </Button>
                    <Button href="/blog" color='inherit'>
                     <strong></strong>
                   </Button>
                    <Button href="/blog" color='inherit'>
                     <strong></strong>
                   </Button>
                    <Button href="/blog" color='inherit'>
                     <strong></strong>
                   </Button>
                   
                  
                   {/* {showModeratorBoard && (
                  <Button href="/mod" color='inherit'>
                    <strong>Moderator Board</strong>
                  </Button>
                )}
                
                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Admin Board</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )}
              */}
             </Paper>
              
              {currentUser ? (
                <Paper style={style.paper1} elevation={0}>
                  <Button color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={style.paper1}elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>
      {/* <AppBar position="sticky"className="nav-menu d-none d-lg-block">
      
      <Button className="nav-menu d-none d-lg-block">DetechCom</Button>
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
 
          //           {currentUser ? (
                <Paper style={style.appBar} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={style.appBar}elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
        </ul>
      </AppBar>.nav-menu */}

    {/* </div>
  </header>End Header */}

  <main id="main">

 




    <Switch>

  
               <Route exact path={["/", "/home"]} component={Home} />
               <Route exact path="/login" component={SignIn} />
               <Route exact path="/createCommunity" component={CreateMainCom} />
               <Route exact path="/register" component={SignUp} />
               <Route exact path="/profile" component={Profile} />
               <Route exact path="/about" component={About} />
               <Route exact path="/blog" component={Blog} />
               <Route exact path="/createSubCom" component={CreateSubCom} /> 
                      <Route exact path="/createdMainCom" component={CreatedMainCom} /> 
               
               <Route exact path="/community" component={SubCommunity} />
               <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path="/chat" component={ChatApp}/>
              <Route exact path="/mainComCreating" component={MainComCreating} />
              <Route path="/mainCom" component={SubComList} />
              <Route path="/subCom" component={Dashboard} />  
              <Route path="/reports" component={Doc} /> 
              <Route path="/doc" component={Doc} /> 
                <Route path="/video" component={Video} /> 
               <Route path="/spreadSheet" component={SpreadSheet} /> 
		 <Route path="/slide" component={Slide} /> 
              <Route path="/activities" component={Activities} /> 
              <Route path="/activitiesView" component={ActivitiesView} /> 
                 <Route exact path="/joinedSubCom" component={JoinedDashboard} />
                   <Route exact path="/calendar" component={Calendar} />
                    <Route exact path="/googlePay" component={GooglePay} />
                     <Route exact path="/communityChat" component={HomePage} />
             </Switch>

 

  
    {/* <section id="services">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Our Sub Communities</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          </div>
        </div>

        <div class="row">
        {subCommunity.map( community=> {return (
         
          <div class="col-lg-4 col-md-6 service-item">
            <div class="service-icon"><i class="fa fa-desktop"></i></div>
            <h4 class="service-title"><a href="">{community.name}</a></h4>
            <p class="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            <Button href="./community" onClick={this.changeSubCommunity}name={community.name} variant="contained" color="primary">join subCommunity</Button>
          </div>
        
          
        )})}

</div>
        
      </div>
    </section>End Services Section
E */}


  </main>


  {/* <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright">
            &copy; Copyright <strong>Imperial Theme</strong>. All Rights Reserved
          </div>
          <div class="credits">
            
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Imperial
         
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>
    </div>
  </footer> */}

  
  </Router>
</div>
    );

    // return (
    //   <Router>
    //     <div className="app">
    //       <AppBar position="static" style={style.appBar}>
    //         <Toolbar>
    //           <Paper style={style.paper} elevation={0}>
    //             {/* <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
    //               <MenuIcon />
    //             </IconButton> */}
    //             <Button href="/" color='inherit'>
    //               <Typography><strong>DigitalOSA</strong></Typography>
    //             </Button>
    //             <Button href="/home" color='inherit'>
    //               <strong>Home</strong>
    //             </Button>
    //             <Button href="/blog" color='inherit'>
    //                 <strong>blog</strong>
    //               </Button>
    //               <Button href="/about" color='inherit'>
    //                 <strong>about us</strong>
    //               </Button>
                
             
    //           </Paper>
              
    //           {currentUser ? (
    //             <Paper style={style.appBar} elevation={0}>
    //               <Button href="/profile" color='inherit'>
    //                 <AccountCircle style={{ fontSize: 40 }}/>
    //                 <strong>{currentUser.username}</strong>
    //               </Button>
    //               <Button href="/login" color='inherit' onClick={this.logOut}>
    //                 <strong>LogOut</strong>
    //               </Button>
    //             </Paper>
    //           ) : (
    //             <Paper style={style.appBar}elevation={0}>
    //               <Button href="/login" color='inherit'>
    //                 <strong>Login</strong>
    //               </Button>
    //               <Button href="/register" color='inherit'>
    //                 <strong>Sign Up</strong>
    //               </Button>
    //             </Paper>
    //           )}
    //         </Toolbar>
    //       </AppBar>

    //       <div>
    //         <Switch>
    //           <Route exact path={["/", "/home"]} component={Home} />
    //           <Route exact path="/login" component={Login} />
    //           <Route exact path="/register" component={Register} />
    //           <Route exact path="/profile" component={Profile} />
    //           <Route exact path="/about" component={About} />
    //           <Route exact path="/blog" component={Blog} />
    //           <Route exact path="/createSubCommunity" component={CreateSubCommunity} /> 
              
              
    //         </Switch>
    //       </div>
        
    //     </div>
    //   </Router>
    // );
  }
}

export default App;
