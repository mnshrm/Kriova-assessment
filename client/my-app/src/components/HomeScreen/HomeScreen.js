import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { MyComponent } from "./styles.js";
import User from "./User/User.js";

function HomeScreen(props) {
  return (
    <>
      <MyComponent className="bg">
        <Grid container style={{ height: "90%" }}>
          <Grid item md={12} style={{ height: "12%" }}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar
                position="static"
                style={{
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                }}
              >
                <Toolbar>
                  <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Kriova
                  </Typography>
                  <Button color="inherit" onClick={props.logOut}>
                    Log out{" "}
                  </Button>
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>
          <Grid style={{ height: "88%" }} item md={12}>
            <User userData={props.userData} />
          </Grid>
        </Grid>
      </MyComponent>
    </>
  );
}

export default HomeScreen;
