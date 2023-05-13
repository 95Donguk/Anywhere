import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function RoomInfo(){
    const navigate = useNavigate();
    return<>RoomInfo
    <button onClick={()=>{
        navigate(-1)
    }}>planner</button>
    </>
}

export default RoomInfo;