import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateAndTimePickers from './DatePicker';
import ChatIcon from '@material-ui/icons/Chat';
import BookIcon from '@material-ui/icons/Book';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HomeIcon from '@material-ui/icons/Home';
export const mainListItems = (
  <div>
    <ListItem href="/mainCom" onClick={()=>{
    localStorage.removeItem("joinedSubId")
    localStorage.removeItem("joinedSubName")
    localStorage.removeItem("joinedSubMotto")
    localStorage.removeItem("joinedSubNumMembers")
    localStorage.removeItem("subId")
    localStorage.removeItem("subName")
    localStorage.removeItem("subMotto")}
    } button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
       <a href="/mainCom">
      <ListItemText primary="Go to Main community" />
       </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <a href="/subCom">
     <ListItemText primary="Dashboard" />
     </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddAPhotoIcon />
      </ListItemIcon>
      <a href="/activities">
     <ListItemText primary="Activities" />
     </a>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BookIcon/>
      </ListItemIcon>
      <a href="/reports">
      <ListItemText primary="Reports" /></a>
    </ListItem>
        <ListItem button>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
   <a href="/chat">
     <ListItemText primary="Chat" />
     </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        
      <VideoCallIcon/ >
        </ListItemIcon>
      <a href="/video">
     <ListItemText primary="Video Conferencing" />
     </a>
    </ListItem>
    
     <ListItem button>
<ListItemIcon>
         <CalendarTodayIcon/>
      </ListItemIcon>
      
     
      <a href="/calendar">
     <ListItemText primary="Upcoming Events" />
     </a>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);
