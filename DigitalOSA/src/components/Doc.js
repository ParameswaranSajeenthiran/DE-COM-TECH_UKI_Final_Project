import React, { useState ,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
import SubComList from './SubComList';
import Dashboard from './Dashboard';
import axios from 'axios'
import { TextField } from '@material-ui/core';

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





export default function Doc() {
  const classes = useStyles();
const [joinedSubCom,setJoinedSubCom]=useState(localStorage.getItem("joinedSubId"));
const [subCom,setSubCom]=useState([]);
const [id,setId]=useState(localStorage.getItem("subId"));
const [type,setType]=useState(localStorage.getItem("report"));
const [mainCom,setMainCom]=useState([]);
const [title,setTitle]=useState("");
const [link,setLink]=useState("");
 useEffect(()=>{
          axios.get(`http://localhost:8080/com/report/doc/${id}`,{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
                .then(response=>{
                 console.log(response.data)
                 setMainCom(response.data)
          
                })
        },)



       
const handleClick=(ele)=>{
localStorage.removeItem("id")
localStorage.setItem("id",ele)
console.log(ele)
}

const docTitle=(e)=>{
setTitle(e.target.value)
}

const docLink=(e)=>{
setLink(e.target.value)
}
const submit=()=>{
  axios.post(`http://localhost:8080/com/report/${id}`,{
	"title":title,
	"source":link,
	"type":"doc"
},{
            headers: {
                'Authorization': 'Basic c2FqZWVudGhpcmFuOjEyMzQ1Ng=='
            }
        })
         .then(response=>{
                 console.log(response.data)
                
          
                })
                
    
}
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
        
        
        <div className={classes.heroContent}>
          { joinedSubCom!=null?(  <Container maxWidth="sm">
          <TextField     fullWidth  label="project Name" variant="filled" onChange={docTitle}></TextField>{title}
          <TextField     fullWidth  label="Document Link" variant="filled" onChange={docLink}></TextField>
                   
             
              
  
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={submit} variant="contained"  color="primary">
                    Add Document
                  </Button>
                </Grid>
                <Grid item>
                  <a  href="/Form">
                 
                  </a>
                </Grid>
              </Grid>
            </div>
          </Container> ):null}
        </div>
        <div id="joinSubcommunity">
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {mainCom.length?(mainCom.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                    {/* {card.Des} */}
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                               
                    <Button href="https://docs.google.com/document/d/1nqAHZ8hREFpSXAGwDq1dizPNh-nqUkcJhfrNZm8qvEI/edit?usp=sharing" target="_blank"  size="small" color="primary">
                     View
                    </Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))):<div><h1 style={{align:"center"}}>no reports yet </h1></div>}
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
        <Copyright/>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
