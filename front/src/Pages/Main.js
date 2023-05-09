import Routers from "../Routers/Routers";
import styled from "styled-components";
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

const menuItems = [
    { text: '홈', icon: <HomeIcon />, link: '/' },
    { text: '여행 탐색', icon: <ExploreIcon />, link: '/explore' },
    { text: '예약', icon: <BookIcon />, link: '/reservation' },
    { text: '고객 지원', icon: <ContactSupportIcon />, link: '/support' },
  ];

const Title = styled.h1`
    background-color:#4410b5 ;
`;



function Main(){
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
      setOpen(!open);
    };

    return(
        <>
       <Title>AnyWhere</Title>
       <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item) => (
            <ListItem
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
        Main
        <Routers/>
        </>
    )
}
export default Main;
