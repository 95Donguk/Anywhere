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
  Container
} from "@mui/material";

function Login(){
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
        <TextField
          label="emai-address"
          name="email"
          autoComplete="email"
          required
          fullWidth
          autoFocus
          margin="normal"
        />
        <TextField
          label="password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          label="Remember me"
          control={<Checkbox value="remember" color="primary" />}
        />
        <Button sx={{ mt: 3 }} fullWidth variant="contained" type="submit">
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link> Forgot Password?</Link>
          </Grid>
          <Grid>
            <Link>Sing Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
}
export default Login;
