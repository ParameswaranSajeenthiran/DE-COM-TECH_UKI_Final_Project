import React, { useState ,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';

import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios'
import Dashboard from './Dashboard';
import MainFeaturedPost from './MainFeaturedPost';
import Popover from '@material-ui/core/Popover';
import { TextField,Button,FormControl } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import AuthService from "../services/auth.service";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import Dashboard from "./Dashboard";
// import Alert from '@material-ui/lab/Alert';

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

const useStyles = makeStyles((theme) => ({
 typography: {
    padding: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {      key:1,
         name:"royal college"
    },
    {      key:2,
     name:"D.S.Senanayake college"
 },
 {      key:3,
     name:"Hindu college, Jaffna"
 },
 {      key:4,
     name:"Moratuwa University"
 }
 ];

export default function SubComList() {

  const [anchorEl, setAnchorEl] = React.useState(null);
    const [userName, setUserName] = React.useState(localStorage.getItem("username"));

const  [show, setShow] = React.useState([]);




   const [search, setSearch] = React.useState("");
const [joined,setJoined]=useState(true);
const [subCom,setSubCom]=useState([]);
const [joinedSubCom,setJoinedSubCom]=useState([]);
const [id,setId]=useState(localStorage.getItem("MainId"));
const [name,setName]=useState(localStorage.getItem("MainName"));
const [motto,setMotto]=useState(localStorage.getItem("MainMotto"));
const [address,setAddress]=useState(localStorage.getItem("MainNumMembers"));
const [image,setImage]=useState(localStorage.getItem("MainImage"));
console.log(userName)

const handleSearch=(ele)=>{
setSearch(ele.target.value)
if(search==""){

axios.get(`http://localhost:8080/com/${id}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
                 setSubCom(response.data)
          
                })
   

console.log(search)

}else{
//console.log(data.filter((item)=>item.title.toLowerCase().indexOf(this.state.search)>-1))
const  searched=subCom.filter((item)=>item.name.toLowerCase().includes(search))
console.log(searched)
setSubCom(searched)
}
}
console.log(id)
 useEffect(()=>{
           AuthService.getJoinedSubCom(userName, id)
           .then(response=>{
                     console.log(response.data)
                if(response.data.length!=0){ const data=Array.from(response.data.reduce((map,obj)=>map.set(obj.id,obj),new Map()).values());
                 console.log(data)
                 setJoinedSubCom(data)
          }
                })
        },[])  
 useEffect(()=>{
          axios.get(`http://localhost:8080/com/userSubCom?user=${userName}d&mainCom=${id}`,{
    
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuUDpzYWplZTEyMw=='
            }
        })
                 .then(response=>{
             
                 console.log(response.data)
     
          
                })
       
        },[userName])
        
        
 useEffect(()=>{
          axios.get(`http://localhost:8080/com/${id}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
           var data=[];
           console.log(joinedSubCom)
           console.log(response.data.includes(joinedSubCom[0]))
           response.data.forEach((item)=>{
           if(joinedSubCom.includes(item.id)){
           console.log("does not include")}else{
           data.push(item)}
           })
                 console.log(data)
                 setSubCom(response.data)
          
                })
        },[])
        
         

        
      

useEffect(()=>{
         localStorage.removeItem("subId")
          
          localStorage.removeItem("subName")
             localStorage.removeItem("subMotto")
                localStorage.removeItem("subNumMembers")
                  localStorage.removeItem("joinedSubId")
          localStorage.removeItem("joinedSubName")
             localStorage.removeItem("joinedSubMotto")
                localStorage.removeItem("joinedSubNumMembers")
                     localStorage.removeItem("subChatId");
                     
                          var data=[];
           console.log(joinedSubCom)
           console.log(subCom.includes(joinedSubCom[0]))
           subCom.forEach((item)=>{
           if(joinedSubCom.includes(item)){
           console.log("does not include")}else{
           data.push(item)}
           })
                 console.log(data)
           var s=[];
           subCom.forEach((card)=>{
           joinedSubCom.forEach((item)=>{
           if(item.id==card.id){
           console.log("does not include")}else{
           s.push(item)
           }
           
           })
           })      
              console.log(s)   
                              
        },[])
        useEffect(()=>{
        
        if(joinedSubCom.length!=0){
    setSubCom(subCom.filter((item)=>{
joinedSubCom.map((join)=>{
if(item.id.includes(join.id)){
return false}else{return true}
})

}
))
     console.log(show)            
     }   },[])
     
     const joinedS=()=>{
       if(joinedSubCom.length!=0){
    setShow(subCom.filter((item)=>{
joinedSubCom.map((join)=>{
if(item.id.includes(join.id)){
return false}else{return true}
})

}
))
     console.log(show)            
     }
     }


const mainFeaturedPost = {
  title: name,
  motto:motto,
  description:address,
  image:image!=null?(image):('https://source.unsplash.com/random'),
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
 const handleClose = () => {
    setAnchorEl(null);
  };
 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
    const open = Boolean(anchorEl);
  const id1 = open ? 'simple-popover' : undefined;

  const classes = useStyles();

  return (
    <React.Fragment>

      <CssBaseline />
    
      <AppBar position="relative">
        {/* <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar> */}
      </AppBar>
      <main>
        {/* Hero unit */}
        <MainFeaturedPost post={mainFeaturedPost} />
     
    
           
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button href="#joinSubcommunity" variant="contained"  color="primary">
                    Join SubCommunity
                  </Button>
                </Grid>
                <Grid item>
                  <a href="/createSubCom">
                  <Button variant="outlined" color="primary">
                    Create SubCommunity
                  </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
       
   
        <div id="joinSubcommunity">
        { joinedSubCom!=0?(   <div class="row">
          <div class="col-md-12"><br/><br/>
            <h3 class="section-title">Communities You joined</h3>
           
          </div>
        </div> ):null}
       <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          {joinedSubCom.map((card) => (
            
              <Grid item key={card} xs={12} sm={6} md={4}>
              
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
    image={card.coverPhoto=!null?(card.coverPhoto):("https://source.unsplash.com/random")}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                    </Typography>
                    <Typography>
                    {/* {card.Des} */}
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
            
                     
                   <Button  href="/subCom"onClick={()=>{localStorage.setItem("subId",card.id)
                    localStorage.setItem("joinedSubId",card.id);
               localStorage.setItem("joinedSubName",card.name)
                    localStorage.setItem("joinedSubMotto",card.motto)
                    localStorage.setItem("joinedSubNumMembers",card.numMembers)
                    localStorage.setItem("subName",card.name)
                    localStorage.setItem("subMotto",card.motto)
                      localStorage.setItem("subChatId",card.numMem)
                    localStorage.setItem("subNumMembers",card.numMembers)} }  size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        
        
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Explore Sub Communities</h3>
            <div class="section-title-divider"></div>
           
            <p class="section-description">join communities and create strong relationship among community members<br/><br/> <TextField fullWidth  label ="search" onChange={handleSearch} variant="filled"placeholder=""></TextField> </p>
          </div>
        </div>
          <Grid container spacing={4}>
          
          {()=>{ subCom.map((cards) =>(
             joinedSubCom.includes(cards)?(<div><h1>{cards.id}</h1></div>):null          
                    
           ))}}
          
         
          {subCom.forEach((card)=>{console.log(card.id);
         console.log( joinedSubCom.includes(card))
         })}
            {subCom.length!=0?(subCom.map((card) =>( 
            
            
               
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.coverPhoto=!null?(card.coverPhoto):('https://source.unsplash.com/random')}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                       {card.name}
                    </Typography>
                    <Typography>
                    {/* {card.Des} */}
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
            
                 { userName==null?(<div><Button onClick={()=>{alert("try clicking VIEW, you have to signUp or Login to join a community")}}size="small" color="primary">join</Button></div>):(<div><Button href="#joinSubcommunity" onClick={()=>{
              const d=joinedSubCom.filter((item)=>{return item.id==card.id})
              console.log(d)
                 if(d.length==1){
                  toast("you have already joined the community", { type: "error" });
                 }else{
                 console.log(joinedSubCom.includes(card))
                   console.log(joinedSubCom)
                 axios.post("http://localhost:8080/com/joinSub",
                   {"subCom":card.id,
                   "memberJoined":userName,
                   "isMember":true,
                   "mainCom":localStorage.getItem("MainId") },{
                    
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        }).then((res)=>{console.log(res);
        setId(localStorage.getItem("MainId"))});
        
        localStorage.setItem("joinedSubId",card.id);
               localStorage.setItem("joinedSubName",card.name)
                    localStorage.setItem("joinedSubMotto",card.motto)
                    localStorage.setItem("joinedSubNumMembers",card.numMembers)
                    localStorage.setItem("subId",card.id)
                    localStorage.setItem("subName",card.name)
                    localStorage.setItem("subMotto",card.motto)
                    localStorage.setItem("subNumMembers",card.numMembers) ;
                                  localStorage.setItem("subChatId",card.numMem);
                     axios.post(`https://api.chatengine.io/chats/${card.numMem}/people/` ,{
    "username": localStorage.getItem("username"),
    
}
   ,{  headers: {

'Project-ID':'6d6599eb-dc9f-4feb-a2e0-90b67aaf9a37',

'User-Name':'sajeenthiran',

'User-Secret':'sajee123'


      }})
      .then((response)=>{console.log(response)
          
      toast("Success! you have joined the community", { type: "success" });
        })
      .catch(()=>{
      toast("You have already joined the community", { type: "success" });
      alert("You have already joined the community");
 
                
                      
            
                    })}}}  size="small" color="primary">  Join
                      {/* <Alert variant="filled" severity="success">
                            Join successfully
                        </Alert> */}
                    </Button></div>)}
                   
                   <Button  href="/subCom"onClick={()=>{localStorage.setItem("subId",card.id)
                    localStorage.setItem("subName",card.name)
                    localStorage.setItem("subMotto",card.motto)
                                  localStorage.setItem("subChatId",card.numMem)
                    localStorage.setItem("subNumMembers",card.numMembers)} }  size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))):<div>  <h1>No Match found</h1>  </div>}
          </Grid>
        </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
