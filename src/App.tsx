import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import { Box, Container, createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  let theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
          },
        },
      },
    },
    spacing: 8,
    typography: {
      fontFamily: "Kanit",
      fontWeightLight: 300,
      fontWeightRegular: 400,
    },
    palette: {
      // mode: authReducer.themeMode ? "dark" : "light",
      mode: "light", 
      primary: !import.meta.env.DEV ? { main: "#ccff90" } : { main: "#5997b2" },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header /> */}
      <Container maxWidth="xl">
        {/* <Box marginTop={12} textAlign="center"> */}
          <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="user" element={<Header />} />
            </Routes>
        {/* </Box> */}
      </Container>
    </ThemeProvider>
  );
}

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
const Home = () => {
  return <p>Home Page</p>;
};
const User = () => {
  return <p>User Page</p>;
};
export default App;
