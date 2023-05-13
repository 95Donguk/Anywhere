import { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button
  } from '@mui/material';
  import HomeIcon from '@mui/icons-material/Home';
  import ExploreIcon from '@mui/icons-material/Explore';
  import BookIcon from '@mui/icons-material/Book';
  import ContactSupportIcon from '@mui/icons-material/ContactSupport';
  import styled from "styled-components";
import { Link } from "react-router-dom";

  const menuItems = [
    { text: '홈', icon: <HomeIcon />, link: '/' },
    { text: 'profile', icon: <ExploreIcon />, link:'/sign_up' },
    { text: '예약', icon: <BookIcon />, link: '/plan' },
    { text: '고객 지원', icon: <ContactSupportIcon />, link: '/support' },
  ];

function NavBar(){
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };

    return(
        <>
         <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item) => (
            <ListItem
            component={Link}  
            button
              key={item.text}
              to={item.link}
              onClick={toggleDrawer}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Button onClick={toggleDrawer}>메뉴 열기</Button>
        </>
    )
}
export default NavBar;