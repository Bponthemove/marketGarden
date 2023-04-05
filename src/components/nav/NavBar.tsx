import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComponent from "./Drawer";
import { Box } from "@mui/system";
import Link from "./Link";
import { routes } from "../../constants/routes";
import { useAuthContext } from "../../context/AuthContext";

function NavBar() {
  const theme = useTheme();
  const { currentUser, logOut } = useAuthContext();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space between",
          maxHeight: "2rem",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            zIndex: "9",
            marginTop: "20rem",
          }}
        >
          <Link path={routes["HOME"].path} label={routes["HOME"].label}>
            <img
              src="./images/logo.png"
              alt="logo round the field market garden"
              style={{ width: "10rem", height: "10rem" }}
            />
          </Link>
        </Box>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <Box
            sx={(theme) => ({
              marginLeft: theme.spacing(5),
              display: "flex",
            })}
          >
            {Object.values(routes).map((route) => {
              if (route.label !== "Home") {
                if (
                  (!currentUser.user && route.label === "Log out") ||
                  (currentUser.user && route.label === "Sign in") ||
                  (!currentUser.superUser && route.label === "Admin") ||
                  (!currentUser.superUser && route.label === "Orders") ||
                  route.label === "Sign up" ||
                  route.path === '/checkout'
                ) {
                  return;
                }
                return <Link key={route.label} {...route} />;
              }
            })}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
