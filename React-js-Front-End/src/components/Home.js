import React, { Component } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "./Container";
import { TextField,Button,FormControl } from "@material-ui/core";
import CreateSubCommunity from "./CreateSubCommunity";
import { Route, Router, Switch } from "react-router";
import SearchCommunity from "./SearchCommunity";
import axios from 'axios'
import CancelIcon from '@material-ui/icons/Cancel';
import { Chat } from "@material-ui/icons";
import ChatApp from "./Chat";
import MainComList from "./MainComList";
import JoinedDashboard from "./JoinedDashboard";
import Link from '@material-ui/core/Link';
import Sidebar from './Sidebar';

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};
const style = {
  root: {
    minWidth: 275,
   backgroundImage:"https://img.wallpapersafari.com/desktop/1280/1024/15/74/142AZu.jpg",
    marginTop: 20,
    height: "200px",
    color: 'black'
  },
  title: {
    fontSize: 24,
    textAlign:'center'
  },
  map:{
    width:"200px",
  height:"100px",
  style:"border:0",
  loading:"lazy"
  
  },  footer: {
    backgroundColor:"grey",
    padding: "10px",
  },
  
    video:{align:"center"}
  
}
const subCommunity=[
  {name:"D.S.Senanayake College",
  id:1},
  {
    name:"Alethea International School",
    id:2
  },
  {
    name:"Ramanathan Hindu Ladies college",
    id:3
  },
  {
    name:"Royal College collombo",
    id:3
  },
  {name:"Moraruwa University",
  id:4
},
{name:"Institute of Science and Mahematics",
id:5
}
]

const communities1=[
  {
  name:"D.S.senanayake college",
  subCom:[
  {
    name:"Art club"
  },
  {
    name:"Art club"
  },
  {
    name:"Art club"
  },
  {
    name:"Art club"
  }
  ]
},
{
  name:"D.S.senanayake college",
  subCom:[
  {
    name:"Art club"
  },
  {
    name:"Art club"
  },
  {
    name:"Art club"
  },
  {
    name:"Art club"
  }
  ]
}


]

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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      communities:"",
      search:""
    };
  }
  
//   componentDidMount(){
//     axios.get('http://localhost:8080/com',{
//     headers: {
//         'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
//     }
// })
//         .then(response=>{
//         console.log(response.data)
//         this.setState({
//             communities:response.data
            
//         })
        
//         }
//         )
//   }
  handleSearch=(ele)=>{
this.setState({
  search:ele.target.value

})
if(this.state.search==""){

  axios.get('http://localhost:8080/com',{
    headers: {
        'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
    }
})
        .then(response=>{
        console.log(response.data)
        this.setState({
            communities:response.data
            
        })
        
        }
        )

console.log(this.state.search)

}else{
//console.log(data.filter((item)=>item.title.toLowerCase().indexOf(this.state.search)>-1))
const  searched=this.state.communities.filter((item)=>item.name.toLowerCase().includes(this.state.search))
console.log(searched)
this.setState({
  communities:searched
})
}
}
  render() {
   const user1=JSON.parse(localStorage.getItem("user"))

     const subCom=localStorage.getItem("subId")

    const{communities}=this.state

    return (
      <React.Fragment>

        
         {/* <Router>        
        <Switch>
<Route exact path="/createSubCommunity" component={CreateSubCommunity} /> */}
 <div>

 
   <div>


    <section id="subscribe">
      <div class="container  fadeInUp">
        <div class="row">
          <div class="col-md-8">
            <h3 class="subscribe-title">Search For Communities</h3>
            <p class="subscribe-text">Join our 1000+ communities and get access to the project Documentions,event galleries and much more!</p>
          </div>
        
          <div class="col-md-4 subscribe-btn-container">
          
            <a class="subscribe-btn" href="#exploreCom">search</a>
          </div>
        </div>
      </div>
    </section>
               </div>

 
<section id="services">
      <div class="container wow fadeInUp">
 
        <div class="row">

<MainComList/>

        {communities.length? communities.map( community=> {return (
         
          <div class="col-lg-4 col-md-6 service-item">
            <div class="service-icon"><i class="fa fa-desktop"></i></div>
            <h4 class="service-title"><a href="">{community.name}</a></h4>
            <p class="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            <Button href="/community"  onClick={this.changeSubCommunity}name={community.name} variant="contained" color="primary">join subCommunity</Button>
          </div>
        
          
        )}):null
        
        
        }

</div>
       
      </div>
    </section>

<section id="contact">
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Contact Us</h3>
            <div class="section-title-divider"></div>
            <p class="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-4">
            <div class="info">
              <div>
                 <iframe style={style.map} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBBwB3KK4SUqrB8seVAF7_F4DKoRzBQM3s&q=Space+Needle,Seattle+WA&zoom=1">
</iframe>

                <i class="fa fa-map-marker"></i>
                <p>A108 Adam Street<br/>New York, NY 535022</p>
              </div>

              <div>
                <i class="fa fa-envelope"></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i class="fa fa-phone"></i>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-8">
            <div class="form">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
 <footer style={style.footer}>
        <Typography variant="h6" align="left" gutterBottom>
         
          
          
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright/>
      </footer>
     </div>

 
      
{/* </Switch>
</Router> */}
      </React.Fragment>
      
    );
    
  }
}
