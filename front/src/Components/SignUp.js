import { useState } from 'react';
import useInput from "../Hooks/useInput";

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Grid, TextField, Button, FormControl, Typography } from '@mui/material';
import styled from 'styled-components';
import UserSlice from '../Reducer/User';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px black;
`;

function SignUp() {

  const [member_name, set_member_name] = useInput('');
  const [member_email, set_member_email] = useInput('');
  const [member_password, set_member_password] = useInput('');
  const [check_member_password,set_check_member_password]=useState('');
  const [member_phone_num, set_member_phone_num] = useInput('');
  const [member_no,set_member_no]=useState(3);

  const navigate = useNavigate();

  const dispatch =useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 로직
    if(member_password !== check_member_password){
        alert("check password again");
    }
    dispatch(
        UserSlice.actions.USER_SIGN_UP({
            member_no:member_no,
            member_name,
            member_email,
            member_password,
            member_phone_num,
            on:false,
        })
    )
    set_member_no((prev)=>prev+1);
    navigate("/login");
  };

  return (
    <Wrapper>
    <Grid container spacing={3} alignItems="center" justifyContent="center">
      
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          회원가입
        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="사용자 이름"
            value={member_name}
            onChange={set_member_name}
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="이메일"
            type="email"
            value={member_email}
            onChange={set_member_email}
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="비밀번호"
            type="password"
            value={member_password}
            onChange={set_member_password}
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="비밀번호 확인"
            type="password"
            value={check_member_password}
            onChange={(event) => set_check_member_password(event.target.value)}
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="전화번호"
            value={member_phone_num}
            onChange={set_member_phone_num}
            required
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} >
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          회원가입
        </Button>
      </Grid>
    </Grid>
    </Wrapper>
  );
}
export default SignUp;