import NavBar from "../Components/NavBar";
import Routers from "../Routers/Routers";
import styled from "styled-components";



const Title = styled.h1`
    color:#a566ff;
    background-color: whitesmoke;
    font-size: 50px;
    text-align: center;
    height: 5vh;
    border-bottom: solid 5px #a566ff;
    overflow: hidden;
    font-family: Verdana, Tahoma, sans-serif;
`;



function Main(){
    return(
        <>
       <Title>AnyWhere</Title>
        <NavBar/>
        Main 
        <Routers/>
        </>
    )
}
export default Main;
