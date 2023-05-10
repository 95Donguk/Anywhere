import NavBar from "../Components/NavBar";
import Routers from "../Routers/Routers";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {Button} from "@mui/material";
import UserSlice from "../Reducer/User";

const Title = styled.h1`
    color:#a566ff;
    background-color: whitesmoke;
    font-size: 50px;
    text-align: center;
    height: 5vh;
    border-bottom: solid 5px #a566ff;
    overflow: hidden;
    font-family: Verdana, Tahoma, sans-serif;
    cursor: pointer;
`;

const UserIcon = styled.h1`

`;


function Main(){
    const navigate = useNavigate();
    const loggedUser = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const onClick=()=>{
        navigate("/");
    }
    const LogOut=()=>{
        let index =loggedUser.map((v)=>v.on).indexOf(true);
        dispatch(UserSlice.actions.USER_LOG_OUT(loggedUser[index]));
    }
    return(
        <>
       <Title onClick={onClick}>AnyWhere</Title>
        <NavBar/>
        <UserIcon>
        {loggedUser.map((v) => (v.on ? `welcome,${v.member_name}` : null))}
        </UserIcon>
        {loggedUser.map((v) => v.on).includes(true) ? (
        <Button variant="outlined"  onClick={LogOut}>logout</Button>
      ) : null}
        Main 
        <Routers/>
        </>
    )
}
export default Main;
