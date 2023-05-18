import { LockOutlined } from "@mui/icons-material";
import {
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  Link,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
  FormControl
} from "@mui/material";

import useInput from "../Hooks/useInput";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import UserSlice from "../Reducer/User";
import { useNavigate } from "react-router-dom";

function Login(){
    const [member_email,set_member_email]=useInput("");
    const [member_pwd,set_member_pwd]=useInput("");

    const navigate = useNavigate();

    const disPatch = useDispatch();
    const userData = useSelector((state)=>state.user);
    const userIndex = userData.map((i) => i.member_email).indexOf(member_email);

    const handleSubmit =useCallback( 
        (event)=>{
        event.preventDefault();
        if(member_email === ""){
          return alert("이메일을 입력해주세요")
        }
        if(member_pwd === ""){
          return alert("암호를 입력해주세요")
        }
        if(!userData.map(v=>v.member_email).includes(member_email)){
           return alert("가입되지 않은 회원입니다.");
        }
        if (userData[userIndex].member_pwd !== member_pwd) {
            return alert("잘못된 암호입니다.");
          }
        disPatch(UserSlice.actions.USER_LOG_IN({member_email,member_pwd}));
        navigate("/");
    },[member_email,member_pwd]);
    return <>
     <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormControl>
        <TextField
          label="emai-address"
          name="email"
          autoComplete="email"
          required
          fullWidth
          autoFocus
          margin="normal"
          value={member_email}
          onChange={set_member_email}
        />
        </FormControl>
        <FormControl>
        <TextField
          label="password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          fullWidth
          margin="normal"
          value={member_pwd}
          onChange={set_member_pwd}
        />
        </FormControl>
        
        <FormControlLabel
          label="Remember me"
          control={<Checkbox value="remember" color="primary" />}
        />
        <Button sx={{ mt: 3 }} fullWidth variant="contained" type="submit" onClick={handleSubmit}>
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link> Forgot Password?</Link>
          </Grid>
          <Grid>
            <Link component={Button} onClick={()=>{navigate("/sign_up")}}>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
}
export default Login;
