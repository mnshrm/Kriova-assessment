import { TextField, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import {
  btn,
  inputField,
  MyFormBg,
  headingDiv,
  LogInFormHeading,
  supportingText,
  LogInFormBg,
} from "./styles.js";

let initialFinalValues = {
  email: "",
};

const ForgotPasswordForm = (props) => {
  const [values, setValues] = useState(initialFinalValues);
  const [ifError, setError] = useState({ name: "", isThere: false });
  const [style, setStyle] = useState({
    textDecoration: "none",
    cursor: "hand",
  });

  function formChange(e) {
    let { name, value } = e.target;

    setValues((pv) => {
      return {
        ...pv,
        [name]: value,
      };
    });
  }

  function onBtnClick() {
    if (!values.email.includes("@")) {
      setError({ name: "email", isThere: true });
      setValues(initialFinalValues);
    } else
      props.onAuth({
        email: "asysnsrs665@gmail.com",
        password: "dummyPassword",
      });
  }

  return (
    <>
      <Grid item md={6}>
        <MyFormBg>
          <div style={headingDiv}>
            <h1 style={LogInFormHeading}>Reset password</h1>
            <br />
            <span style={supportingText}>
              <span
                onMouseOver={() =>
                  setStyle({ textDecoration: "underline", cursor: "pointer" })
                }
                onMouseLeave={() =>
                  setStyle({ textDecoration: "none", cursor: "default" })
                }
                style={style}
                onClick={() => props.onClick(2)}
              >
                Log in here
              </span>
            </span>
          </div>
          <LogInFormBg>
            <form autoComplete="off">
              <div style={inputField}>
                <TextField
                  error={ifError.isThere && ifError.name === "email"}
                  variant="standard"
                  value={values.email}
                  type={"email"}
                  label="Email"
                  name="email"
                  onChange={formChange}
                  helperText={
                    ifError.isThere &&
                    ifError.name === "email" &&
                    "email must contain '@'"
                  }
                />
              </div>

              <Button style={btn} variant="contained" onClick={onBtnClick}>
                Reset Password
              </Button>
            </form>
          </LogInFormBg>
        </MyFormBg>
      </Grid>
    </>
  );
};

export default ForgotPasswordForm;
