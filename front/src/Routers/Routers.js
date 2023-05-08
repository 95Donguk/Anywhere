import {Route,Routes} from 'react-router-dom';
import Home from './../Pages/Home';
import SignUp from './../Components/SignUp';
import Login from './../Components/Login';
import Profile from './../Components/Profile';

export default function Routers(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/sign_up' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Routes>
    )
}
