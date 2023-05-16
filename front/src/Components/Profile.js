import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile(){
    const me = useSelector((state)=>state.user.filter((v)=>v.on === true));
    return <>
    profile
    <h1>{me[0].member_name}</h1>
    <Link to='/my_plan'>myplan</Link>
    </>
}
export default Profile;