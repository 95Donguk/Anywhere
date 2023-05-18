import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageBox = styled.div`
  width: 5em;
  height: 5em;
  border: solid 1px black;
  border-radius: 50px;
  overflow: hidden;
`;

function Profile(){
    const me = useSelector((state)=>state.user.filter((v)=>v.on === true));
    return <>
      <ImageBox>{/* <img src={require("")} /> */}</ImageBox>
    profile
    <h1>{me[0].member_name}</h1>
    <Link to='/my_plan'>myplan</Link>
    </>
}
export default Profile;