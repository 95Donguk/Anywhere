import { useSelector } from "react-redux";

function Profile(){
    const me = useSelector((state)=>state.user.filter((v)=>v.on === true));
    return <>
    profile
    <h1>{me[0].member_name}</h1>
    </>
}
export default Profile;