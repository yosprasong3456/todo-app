import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { authSelector, login } from "../store/slices/authSlice";
// import { useAppDispatch } from "../store/store";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Popover,
  Slide,
} from "@mui/material";
// import SwitchMode from "../components/SwitchMode";
import { sizing } from "@mui/system";
// import { enqueueSnackbar } from "notistack";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Kim-Change-The-World-2023
      </Link>
    </Typography>
  );
}

type Props = {};

export default function Login({}: Props) {
  //   const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const open = Boolean(anchorEl);
  //   const authReducer = useSelector(authSelector);
  // const [username, setUsername] = useState(null);
  // const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataSet = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(dataSet)
    // const result = await dispatch(login(dataSet));
    // if (login.fulfilled.match(result)) {
      // alert("Login successfully");
    //   enqueueSnackbar(`เข้าสู่ระบบสำเร็จ!`, {
    //     variant: "success",
    //   });
    //   navigate("/welcome");
    // } else {
    //   enqueueSnackbar(`ผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง!`, {
    //     variant: "error",
    //   });
    // }
  };

  React.useEffect(() => {
    // if (authReducer.isAuthented) {
    //   navigate("/welcome");
    // }
  }, []);

  return (
    <Grid
      container
      // component="main"
      sx={{ height: "100vh" }}
    >
      {/* <CssBaseline /> */}
      <Grid item xs={12} sm={12} md={12} sx={{ margin: "auto" }}>
        <Box
          sx={{
            // my: 15,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={12} textAlign="center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9099/9099168.png"
                width={200}
                alt="logo"
              />
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center">
          {!open && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 10, width: "50%" }}
              onClick={handleClickOpen}
            >
              Sign in
            </Button>
          )}
        </Box>
      </Grid>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
        //   onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth="xs"
        >
          <DialogContent>
            <Box textAlign="center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9099/9099168.png"
                width={150}
                alt="logo"
              />
            </Box>
            <Box component="form"
            noValidate
            onSubmit={handleSubmit}>
                <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SIGN IN
            </Button>
            </Box>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="error"
              onClick={handleClose}
            >
              Cancle
            </Button>
          </DialogContent>
          {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
        </Dialog>
      </div>
    </Grid>
  );
}
