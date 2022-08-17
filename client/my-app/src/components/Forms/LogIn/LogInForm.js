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
  forgotPasswordStyle,
} from "./styles.js";

let initialFinalValues = {
  email: "",
  password: "",
};

function LogInForm(props) {
  const [values, setValues] = useState(initialFinalValues);
  const [ifError, setError] = useState({ name: "", isThere: false });
  const [style, setStyle] = useState({
    name: "",
    styling: {
      textDecoration: "none",
      cursor: "hand",
    },
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
    } else {
      props.onAuth({ email: values.email, password: values.password });
    }
  }

  return (
    <>
      <Grid item md={6}>
        <MyFormBg>
          <div style={headingDiv}>
            <h1 style={LogInFormHeading}>Log In</h1>
            <br />
            <span style={supportingText}>
              Not a user ?{" "}
              <span
                onMouseOver={() =>
                  setStyle({
                    name: "up",
                    styling: { textDecoration: "underline", cursor: "pointer" },
                  })
                }
                onMouseLeave={() =>
                  setStyle({
                    name: "",
                    styling: { textDecoration: "none", cursor: "default" },
                  })
                }
                style={style.name === "up" ? style.styling : null}
                onClick={() => props.onClick(1)}
              >
                Sign Up here
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
              <div style={inputField}>
                <TextField
                  variant="standard"
                  error={false}
                  value={values.password}
                  type={"password"}
                  label="Password"
                  name="password"
                  onChange={formChange}
                />
              </div>

              <Button style={btn} variant="contained" onClick={onBtnClick}>
                Log In
              </Button>
              <span
                style={forgotPasswordStyle}
                onClick={() => props.onClick(3)}
              >
                <span
                  onMouseOver={() =>
                    setStyle({
                      name: "down",
                      styling: {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    })
                  }
                  onMouseLeave={() =>
                    setStyle({
                      name: "",
                      styling: { textDecoration: "none", cursor: "default" },
                    })
                  }
                  style={style.name === "down" ? style.styling : null}
                >
                  Forgot password
                </span>
              </span>
            </form>
          </LogInFormBg>
        </MyFormBg>
      </Grid>
    </>
  );
}

export default LogInForm;
