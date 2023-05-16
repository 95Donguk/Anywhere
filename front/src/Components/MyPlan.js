import { useSelector } from "react-redux";

function MyPlan(){
    const me = useSelector((state)=>state.user.filter((v)=>v.on === true));
    const me_plan = useSelector((state)=>state.plan.filter((v)=>v.member_no === me[0].member_no));
    return<>
    <h1>{me[0].member_name}</h1>
    <h2>{me_plan[0].city_no}</h2>
    </>
}
export default MyPlan;