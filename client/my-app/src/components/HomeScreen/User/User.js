import React from "react";
import { Typography } from "@mui/material";
import { nameStyle, Info, InfoSnippet, Styledspan } from "./styles";

function User(props) {
  let invalidUser = false;
  if (props.userData === undefined) invalidUser = true;
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          padding: "0 30px",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          fontFamily: "'Work Sans', sans-serif",
        }}
      >
        <div>
          <Typography
            style={nameStyle}
            variant={invalidUser ? "h2" : "h1"}
            component="div"
          >
            {invalidUser
              ? "employee not found or wrong password"
              : props.userData.Ename}
          </Typography>
          <span>
            <span style={{ fontSize: "20px" }}>
              Employee id:{" "}
              <Styledspan>{!invalidUser && props.userData.Eid}</Styledspan>
            </span>
          </span>
        </div>
        <Info>
          <InfoSnippet>
            Date of birth:{" "}
            <Styledspan>
              {!invalidUser && props.userData.DOB.substring(0, 10)}
            </Styledspan>
          </InfoSnippet>
          <br />
          <InfoSnippet>
            Email:{" "}
            <Styledspan>{!invalidUser && props.userData.Email}</Styledspan>
          </InfoSnippet>
          <InfoSnippet>
            Contact :{" "}
            <Styledspan>{!invalidUser && props.userData.PhNumber}</Styledspan>
          </InfoSnippet>
          <br />
          <InfoSnippet>
            State:{" "}
            <Styledspan>{!invalidUser && props.userData.state}</Styledspan>
          </InfoSnippet>
          <InfoSnippet>
            City: <Styledspan>{!invalidUser && props.userData.city}</Styledspan>
          </InfoSnippet>
          <InfoSnippet>
            Street:{" "}
            <Styledspan>{!invalidUser && props.userData.street}</Styledspan>
          </InfoSnippet>
          <InfoSnippet>
            Pincode:{" "}
            <Styledspan>{!invalidUser && props.userData.pincode}</Styledspan>
          </InfoSnippet>
          <InfoSnippet>
            Country:{" "}
            <Styledspan>{!invalidUser && props.userData.country}</Styledspan>
          </InfoSnippet>
        </Info>
      </div>
    </>
  );
}

export default User;
