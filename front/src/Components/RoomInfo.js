import { Link } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Carousel from "./Carousel";

function RoomInfo(){

    const navigate = useNavigate();
    const {id,room}=useParams();
    const dispatch = useDispatch();
    const me = useSelector((state) => state.user.filter((v) => v.on === true));
    const plan = useSelector((state) =>
      state.plan.filter((v) => v.member_no === me[0].member_no)
    );
    
    const onClick = () => {
        navigate(`/payment/${room}`);
        
      };
    return(<> 
    <h1>{me[0].member_name}</h1>
    <h1>{id}lodge info</h1>

    <Carousel />
    <h2>숙소 이름{room}</h2>
    <h2>호스트 정보</h2>
    <h2>특징 키워드</h2>
    <h2>상세 정보</h2>
    <h2>위치 정보</h2>
    <h2>예약 날짜</h2>
    <h2>후기</h2>
    <button onClick={onClick}>결제하기</button>
    </>)
}

export default RoomInfo;