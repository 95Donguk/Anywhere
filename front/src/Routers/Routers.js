import {Route,Routes} from 'react-router-dom';
import Home from './../Pages/Home';
import SignUp from './../Components/SignUp';
import Login from './../Components/Login';
import Profile from './../Components/Profile';
import RoomInfo from '../Components/RoomInfo';
import Plan from '../Components/Plan';
import Payment from '../Components/Payment';
import Place from '../Components/Place';
import MyPlan from '../Components/MyPlan';

export default function Routers(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/sign_up' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/roominfo/:id/:room' element={<RoomInfo/>}/>
            <Route path='/place/:id' element={<Place/>}/>
            <Route path='/plan' element={<Plan/>}/>
            <Route path='/payment/:room' element={<Payment/>}/>
            <Route path='/my_plan' element={<MyPlan/>}/>
            <Route/>
        </Routes>
    )
}
