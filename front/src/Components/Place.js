import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import styled from "styled-components";
import { useState } from "react";
const Nav = styled.div`
  display: flex;
`;

function Place() {
  const { id } = useParams();
  const navigate = useNavigate();


  const [room, setRoom] = useState(0);

  const OnClick = () => {
    navigate(`/roominfo/${id}/${room}`);
  };
  return (
    <>
      <h1>Place</h1>
      <Nav>
      
      </Nav>
      <div onClick={OnClick}>
        <Carousel onClick={OnClick} place={`${id}/ 1번 숙소명`} />
        <Carousel place={`${id}/ 2번 숙소명`} />
        <Carousel place={`${id}/ 3번 숙소명`} />
      </div>
    </>
  );
}
export default Place;