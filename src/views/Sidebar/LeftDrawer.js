import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, ListItemButton, ListItemIcon } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Person2Icon from '@mui/icons-material/Person2';
import ContactsIcon from '@mui/icons-material/Contacts';
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // toolbar: theme.mixins.toolbar,
  iconImage: {
    height: "50px",
    width: "130px",
  },
}));

function LeftDrawer() {
  const classes = useStyles();
  const [selectedValue,setSelectedValue] = useState(0)
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}>
        <Box display="flex" justifyContent="center" sx={{mt:1, height: "80px" , mb:1.5 }}>
          <img
            src="/images/assiduus-logo.jpg"
            alt="no-image"
            className={classes.iconImage}
          />
        </Box>
      </div>
      <List >
        <ListItem  selected={selectedValue === 0} disablePadding onClick={()=>{setSelectedValue(0)}}>
          <ListItemButton sx={selectedValue === 0 && {backgroundColor : '#47B747'}} >
            <ListItemIcon >
              <DashboardIcon sx={selectedValue === 0 ? {color:'#fff'} :  {color:'black'}} />
            </ListItemIcon>
            <ListItemText sx={selectedValue === 0 && {color:'#fff'}}  primary="Dashboard"  />
          </ListItemButton>
        </ListItem >
        <ListItem  selected={selectedValue === 1} disablePadding onClick={()=>{setSelectedValue(1)}}>
          <ListItemButton sx={selectedValue === 1 && {background : '#47B747'}}>
            <ListItemIcon>
              <AccountBalanceWalletIcon sx={selectedValue === 1 ? {color:'#fff'} :  {color:'black'}} />
            </ListItemIcon>
            <ListItemText sx={selectedValue === 1 && {color:'#fff'}} primary="Accounts" />
          </ListItemButton>
        </ListItem>
        <ListItem  selected={selectedValue === 2} disablePadding onClick={()=>{setSelectedValue(2)}}>
          <ListItemButton sx={selectedValue === 2 && {background : '#47B747'}}>
            <ListItemIcon>
              <AttachMoneyIcon sx={selectedValue === 2 ? {color:'#fff'} :  {color:'black'}} />
            </ListItemIcon>
            <ListItemText sx={selectedValue === 2 && {color:'#fff'}} primary="Payroll" />
          </ListItemButton>
        </ListItem>
        <ListItem  selected={selectedValue === 3} disablePadding onClick={()=>{setSelectedValue(3)}}> 
          <ListItemButton sx={selectedValue === 3 && {background : '#47B747'}}>
            <ListItemIcon>
              <SummarizeIcon sx={selectedValue === 3 ? {color:'#fff'} :  {color:'black'}} />
            </ListItemIcon>
            <ListItemText sx={selectedValue === 3 && {color:'#fff'}} primary="Reports" />
          </ListItemButton>
        </ListItem>
        <ListItem  selected={selectedValue === 5}  disablePadding onClick={()=>{setSelectedValue(5)}}>
          <ListItemButton sx={selectedValue === 5 && {background : '#47B747'}}>
            <ListItemIcon>
              <Person2Icon sx={selectedValue === 5 ? {color:'#fff'} :  {color:'black'}} />
            </ListItemIcon>
            <ListItemText sx={selectedValue === 5 && {color:'#fff'}} primary="Advisor" />
          </ListItemButton>
        </ListItem>
        <ListItem  selected={selectedValue === 4}  disablePadding onClick={()=>{setSelectedValue(4)}}>
          <ListItemButton sx={selectedValue === 4 && {background : '#47B747'}}>
            <ListItemIcon>
              <ContactsIcon sx={selectedValue === 4 ? {color:'#fff'} :  {color:'black'}} />
            </ListItemIcon>
            <ListItemText sx={selectedValue === 4 && {color:'#fff'}} primary="Contacts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default LeftDrawer;
